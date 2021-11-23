package pji.projet.Etatdesprojets.model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;

import org.springframework.data.web.JsonPath;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * This class contains some data about the Sonarqube Analyze of a project
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */

public class SonarqubeAnalyze {
	String sonarUrl;
	
	private int analyzeDone;
	
	private int sonarKey;
	private String sonarToken;

	private int bugs;
	private int vulnerabilities;
	private int code_smells;
	private int duplications;
	
	public SonarqubeAnalyze(int sonarKey, String sonarToken, String sonarUrl) {
		this.analyzeDone = 0;
		
		this.sonarKey = sonarKey;
		this.sonarToken = sonarToken;
		this.sonarUrl = "http://" + sonarUrl;
		
		this.bugs = 0;
		this.vulnerabilities = 0;
		this.code_smells = 0;
		this.duplications = 0;
	}
	
	//Récupère les données depuis l'API et les stocke dans l'objet courant
	public void getApiAnalyze() throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		JsonNode root;
		
		String b = sonarApiRequest("/api/issues/search?componentKeys=project" + this.sonarKey + "&types=BUG");
		if(b != null) {
			root = mapper.readTree(b);
			this.bugs = root.get("total").asInt();
		} else {
			this.analyzeDone = -1;
		}
		
		String v = sonarApiRequest("/api/issues/search?componentKeys=project" + this.sonarKey + "&types=VULNERABILITY");
		if(v != null) {
			root = mapper.readTree(v);
			this.vulnerabilities = root.get("total").asInt();
		} else {
			this.analyzeDone = -1;
		}
		
		String c = sonarApiRequest("/api/issues/search?componentKeys=project" + this.sonarKey + "&types=CODE_SMELL");
		if(c != null) {
			root = mapper.readTree(c);
			this.code_smells = root.get("total").asInt();
		} else {
			this.analyzeDone = -1;
		}
		
		String d = sonarApiRequest("/api/duplications/show?key=project" + this.sonarKey);
		if(d != null) {
			root = mapper.readTree(d);
			this.duplications = root.get("duplications").size();
		} else {
			this.analyzeDone = -1;
		}
		
	}
	
	
	public String sonarApiRequest(String request) {
		URL url;
		String content = "";

		try {
		url = new URL(this.sonarUrl + request);		
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");
		String tokenBase = this.sonarToken + ":";
		String basicAuth = "Basic " + new String(Base64.getEncoder().encode(tokenBase.getBytes()));
		con.setRequestProperty("Authorization", basicAuth);
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		while ((inputLine = in.readLine()) != null) {
		    content += inputLine;
		}
		in.close();
		} catch (IOException e) {
			//e.printStackTrace();
			return null;
		}
		
		return content;
	}
	
	/*Getters and setters*/
	
	public int getBugs() {
		return bugs;
	}
	public void setBugs(int bugs) {
		this.bugs = bugs;
	}
	public int getVulnerabilities() {
		return vulnerabilities;
	}
	public void setVulnerabilities(int vulnerabilities) {
		this.vulnerabilities = vulnerabilities;
	}
	public int getCode_smells() {
		return code_smells;
	}
	public void setCode_smells(int code_smells) {
		this.code_smells = code_smells;
	}
	public int getDuplications() {
		return duplications;
	}
	public void setDuplications(int duplications) {
		this.duplications = duplications;
	}
	public int getSonarKey() {
		return sonarKey;
	}
	public void setSonarKey(int sonarKey) {
		this.sonarKey = sonarKey;
	}
	public String getSonarToken() {
		return sonarToken;
	}
	public void setSonarToken(String sonarToken) {
		this.sonarToken = sonarToken;
	}

	public int getAnalyzeDone() {
		return analyzeDone;
	}

	public void setAnalyzeDone(int analyzeDone) {
		this.analyzeDone = analyzeDone;
	}
}
