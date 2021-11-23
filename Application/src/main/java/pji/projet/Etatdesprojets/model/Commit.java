package pji.projet.Etatdesprojets.model;

/**
 * This class contains all the useful infos that we want from a commit pushed on GitLab.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
public class Commit {
	
	private String message;
	private String author;
	private String date;
	private int additions;
	private int deletions;
	
	public Commit(String message, String author, String date, int additions, int deletions) {
		super();
		this.message = message;
		this.author = author;
		this.date = date;
		this.setAdditions(additions);
		this.setDeletions(deletions);
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public int getAdditions() {
		return additions;
	}

	public void setAdditions(int additions) {
		this.additions = additions;
	}

	public int getDeletions() {
		return deletions;
	}

	public void setDeletions(int deletions) {
		this.deletions = deletions;
	}
	
}
