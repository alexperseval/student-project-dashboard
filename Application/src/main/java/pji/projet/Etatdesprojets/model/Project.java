package pji.projet.Etatdesprojets.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

/**
 * This class represents a git project from GitLab. It is stored in the database
 * and ultimately used in the web app to show the infos of a project.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
@Entity
public class Project {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int projectId;
	private String projectName;
	private String course;
	@ManyToOne
	@JoinColumn(nullable = false)
	private Professor professor;
	@ManyToMany
	private List<Student> students;
	private String projectDescription;
	private String gitUrl;
	private String token;
	private String gitRoot;
	
	private int archived;
	
	public Project() {}
	
	public Project(int id, int projectId, String projectName, String course, Professor professor, List<Student> students,
			String projectDescription, String gitUrl, String token, String gitRoot) {
		super();
		this.id = id;
		this.setProjectId(projectId);
		this.projectName = projectName;
		this.course = course;
		this.professor = professor;
		this.students = students;
		this.projectDescription = projectDescription;
		this.gitUrl = gitUrl;
		this.token = token;
		this.gitRoot = gitRoot;
		this.archived = -1;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
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

	public int getArchived() {
		return archived;
	}

	public void setArchived(int archived) {
		this.archived = archived;
	}
	
}
