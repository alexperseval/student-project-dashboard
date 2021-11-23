package pji.projet.Etatdesprojets.model;

import java.util.List;
import java.util.Map;

/**
 * This class contains all the commits of a git repository and the count of commits for each authors
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
public class CommitsInfo {
	
	private List<Commit> commits;
	private Map<String, Integer> nbCommits;
	private Map<String, Integer[]> averageStatsByUser;
	private Map<String, Integer> nbCommitsOverLastWeek;
	
	public CommitsInfo(List<Commit> commits, Map<String, Integer> nbCommits, 
			Map<String, Integer[]> averageStatsByUser,
			Map<String, Integer> nbCommitsOverLastWeek) {
		super();
		this.commits = commits;
		this.nbCommits = nbCommits;
		this.setAverageStatsByUser(averageStatsByUser);
		this.nbCommitsOverLastWeek = nbCommitsOverLastWeek;
	}
	
	public List<Commit> getCommits() {
		return commits;
	}
	
	public void setCommits(List<Commit> commits) {
		this.commits = commits;
	}
	
	public Map<String, Integer> getNbCommits() {
		return nbCommits;
	}
	
	public void setNbCommits(Map<String, Integer> nbCommits) {
		this.nbCommits = nbCommits;
	}

	public Map<String, Integer[]> getAverageStatsByUser() {
		return averageStatsByUser;
	}

	public void setAverageStatsByUser(Map<String, Integer[]> averageStatsByUser) {
		this.averageStatsByUser = averageStatsByUser;
	}

	public Map<String, Integer> getNbCommitsOverLastWeek() {
		return nbCommitsOverLastWeek;
	}

	public void setNbCommitsOverLastWeek(Map<String, Integer> nbCommitsOverLastWeek) {
		this.nbCommitsOverLastWeek = nbCommitsOverLastWeek;
	}

	
}
