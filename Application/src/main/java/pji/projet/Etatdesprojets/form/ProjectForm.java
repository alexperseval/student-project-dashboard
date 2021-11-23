package pji.projet.Etatdesprojets.form;

/**
 * This class contains all the useful infos needed to create and add a project in the database.
 * It is used with a form on the web app.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
public class ProjectForm {
	// general infos
	private int projectId;
	private String projectName;
	private String course;
	private String projectDescription;
	private String gitUrl;
	private String token;
	private String gitRoot;
	
	// prof
	private int profId;
	private String profFirstName;
	private String profSurname;
	private String profMail;
	
	// student 1
	private int student1Id;
	private String student1FirstName;
	private String student1Surname;
	private String student1Mail;
	private String student1Group;
	
	// student 2
	private int student2Id;
	private String student2FirstName;
	private String student2Surname;
	private String student2Mail;
	private String student2Group;

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public String getGitUrl() {
		return gitUrl;
	}

	public void setGitUrl(String gitUrl) {
		this.gitUrl = gitUrl;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getProfFirstName() {
		return profFirstName;
	}

	public void setProfFirstName(String profFirstName) {
		this.profFirstName = profFirstName;
	}

	public String getProfSurname() {
		return profSurname;
	}

	public void setProfSurname(String profSurname) {
		this.profSurname = profSurname;
	}

	public String getProfMail() {
		return profMail;
	}

	public void setProfMail(String profMail) {
		this.profMail = profMail;
	}

	public String getStudent1FirstName() {
		return student1FirstName;
	}

	public void setStudent1FirstName(String student1FirstName) {
		this.student1FirstName = student1FirstName;
	}

	public String getStudent1Surname() {
		return student1Surname;
	}

	public void setStudent1Surname(String student1Surname) {
		this.student1Surname = student1Surname;
	}

	public String getStudent1Mail() {
		return student1Mail;
	}

	public void setStudent1Mail(String student1Mail) {
		this.student1Mail = student1Mail;
	}

	public String getStudent2FirstName() {
		return student2FirstName;
	}

	public void setStudent2FirstName(String student2FirstName) {
		this.student2FirstName = student2FirstName;
	}

	public String getStudent2Surname() {
		return student2Surname;
	}

	public void setStudent2Surname(String student2Surname) {
		this.student2Surname = student2Surname;
	}

	public String getStudent2Mail() {
		return student2Mail;
	}

	public void setStudent2Mail(String student2Mail) {
		this.student2Mail = student2Mail;
	}

	public String getStudent1Group() {
		return student1Group;
	}

	public void setStudent1Group(String student1Group) {
		this.student1Group = student1Group;
	}

	public String getStudent2Group() {
		return student2Group;
	}

	public void setStudent2Group(String student2Group) {
		this.student2Group = student2Group;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public int getProfId() {
		return profId;
	}

	public void setProfId(int profId) {
		this.profId = profId;
	}

	public int getStudent1Id() {
		return student1Id;
	}

	public void setStudent1Id(int student1Id) {
		this.student1Id = student1Id;
	}

	public int getStudent2Id() {
		return student2Id;
	}

	public void setStudent2Id(int student2Id) {
		this.student2Id = student2Id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getGitRoot() {
		return gitRoot;
	}

	public void setGitRoot(String gitRoot) {
		this.gitRoot = gitRoot;
	}
	
	
}
