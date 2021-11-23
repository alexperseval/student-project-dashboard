package pji.projet.Etatdesprojets.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import pji.projet.Etatdesprojets.model.Commit;
import pji.projet.Etatdesprojets.model.CommitsInfo;

/**
 * This class contains utility functions
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
public class Utils {
	public static CommitsInfo getCommitsInfo(int projectId, String token, String gitRoot) throws IOException {
		String commits = "";
		
		// Request the GitLab API
		String url = "https://" + gitRoot + "/api/v4/projects/" + projectId
				+ "/repository/commits?with_stats=true&access_token=" + token;
		URL oracle = new URL(url);
		BufferedReader in = new BufferedReader(new InputStreamReader(oracle.openStream()));
		ObjectMapper objectMapper = new ObjectMapper();

		String inputLine;
		while ((inputLine = in.readLine()) != null)
			commits += inputLine;
		in.close();

		JsonNode data = objectMapper.readTree(commits);
		List<Commit> commitsList = new ArrayList<>();
		Map<String, Integer> nbCommits = new HashMap<String, Integer>();
		Map<String, Integer[]> averageStatsByUser = new HashMap<String, Integer[]>();
		Map<String, Integer> nbCommitsOverLastWeek = Utils.getLastWeekMap("yyyy-MM-dd");

		for (JsonNode commit : data) {
			// Retrieve the informations we need from the JSON object
			String author = commit.get("author_name").asText();
			String message = commit.get("message").asText();
			String gitLabDate = commit.get("committed_date").asText();
			JsonNode stats = commit.get("stats");
			int additions = stats.get("additions").asInt();
			int deletions = stats.get("deletions").asInt();
			
			// parsing date: the format given by the GitLab API can't be parsed if
			// we keep the point and what's following it
			gitLabDate = gitLabDate.substring(0, gitLabDate.indexOf('.'));
			String datetime = Utils.parseGitLabDate(gitLabDate, "dd-MM-yyyy HH:mm:ss");
			String date = Utils.parseGitLabDate(gitLabDate, "yyyy-MM-dd");
			

			// Number of commits over the last week: if the commit's date is the same
			// as one of the seven last days, we add it to the counter
			if (nbCommitsOverLastWeek.get(date) != null) {
				nbCommitsOverLastWeek.put(date, nbCommitsOverLastWeek.get(date) + 1);
			}
			
			// Number of commits by user
			if (nbCommits.containsKey(author)) {
				nbCommits.put(author, nbCommits.get(author) + 1);
			} else {
				nbCommits.put(author, 1);
			}
			
			// Average additions/deletions by user
			if (averageStatsByUser.containsKey(author)) {
				Integer[] tabStats = averageStatsByUser.get(author);
				int sumAdd = tabStats[0] + additions;
				int sumDel = tabStats[1] + deletions;
				Integer[] sums = {sumAdd, sumDel};
				
				averageStatsByUser.put(author, sums);
			} else {
				Integer[] sums = {additions, deletions};
				averageStatsByUser.put(author, sums);
			}

			Commit newCommit = new Commit(message, author, datetime, additions, deletions);
			commitsList.add(newCommit);
		}
		
		// Divides the sum of additions/deletions by user by the number of commits of that user
		for (String author : averageStatsByUser.keySet()) {
			Integer[] sums = averageStatsByUser.get(author);
			int avgAdd = sums[0] / nbCommits.get(author);
			int avgDel = sums[1] / nbCommits.get(author);
			Integer[] avgs = {avgAdd, avgDel};
			averageStatsByUser.put(author, avgs);
		}

		CommitsInfo infos = new CommitsInfo(commitsList, nbCommits, averageStatsByUser, nbCommitsOverLastWeek);

		return infos;
	}
	
	/**
	 * Parse a date typed as a string into the format we want.
	 * 
	 * @param date the date to parse
	 * @param format the format to use
	 * @return the parsed date
	 */
	public static String parseGitLabDate(String date, String format) {
		LocalDateTime parsed = LocalDateTime.parse(date);
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern(format);
	    String formattedDate = parsed.format(myFormatObj);
	    
	    return formattedDate;
	}
	
	public static Map<String, Integer> getLastWeekMap(String format) {
		final int NB_DAYS = 30;
		final int STEP = 1;
		
		LocalDateTime now = LocalDateTime.now();
		LocalDateTime old = now.minusDays(NB_DAYS - 1);
		
		Map<String, Integer> lastWeekMap = new TreeMap<String, Integer>();
		
		for (int i = 0; i < NB_DAYS; i++) {
			String parsed = Utils.parseGitLabDate(old.toString(), format);
			lastWeekMap.put(parsed, 0);
			old = old.plusDays(STEP);
		}
		
		return lastWeekMap;
	}

}
