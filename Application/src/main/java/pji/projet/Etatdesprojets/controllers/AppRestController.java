package pji.projet.Etatdesprojets.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pji.projet.Etatdesprojets.model.CommitsInfo;
import pji.projet.Etatdesprojets.model.Project;
import pji.projet.Etatdesprojets.model.SonarqubeAnalyze;
import pji.projet.Etatdesprojets.repository.ProjectRepository;
import pji.projet.Etatdesprojets.utils.Utils;

/**
 * This class is a controller used to map the restFUL API of the application.
 * It is called by our React components to get data from our database.
 * The data on the API is typed as JSON.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
@RestController
class AppRestController {

	//private String accessToken = "uyDs3r6B9HcnnUCFWQok";
	
	private ProjectRepository projectRepository;

    public AppRestController(ProjectRepository pr) {
        this.projectRepository = pr;
    }

    /**
     * GET request giving the project list stored in the database
     * 
     * @return the project list as JSON
     */
	@GetMapping("/api/v1/projectList")
	public List<Project> showApiProjectsList() {
		List<Project> projects = projectRepository.findAll();
		
		return projects;
	}
	
	/**
	 * GET request giving a project found by its id.
	 * 
	 * @param id the database ID (not the GitLab project's ID)
	 * @return the project as JSON
	 */
	@GetMapping("/api/v1/projectList/{id}")
	public Project showProject(@PathVariable String id) {		
		Project project = projectRepository.findById(Integer.parseInt(id));
		
		return project;
	}
	
	@GetMapping("/api/v1/commitInfo")
	public CommitsInfo showApiCommitInfo(
			@RequestParam int id, 
			@RequestParam String token,
			@RequestParam String gitRoot) 
					throws IOException {
		return Utils.getCommitsInfo(id, token, gitRoot);
	}
	
	/**
	 * GET request giving a project sonarqube analyze by its id.
	 * 
	 * @param key the sonarqube project's key
	 * @return the sonarqube analyze as JSON
	 * @throws IOException 
	 */
	@GetMapping("/api/v1/sonarqube/{key}")
	public SonarqubeAnalyze getSonarqubeAnalyze(@PathVariable String key, @RequestParam String sonarToken, @RequestParam String sonarUrl) throws IOException {
		SonarqubeAnalyze sa = new SonarqubeAnalyze(Integer.parseInt(key), sonarToken, sonarUrl);
		
		sa.getApiAnalyze();
		
		return sa;
	}
	
	/**
	 * GET archive a project in the database by its id.
	 * 
	 * @param id the database ID (not the GitLab project's ID)
	 * @return true if the project has been archived
	 */
	@GetMapping("/api/v1/archive/{id}") 
	public int archiveProject(@PathVariable String id)
	{
		int res = 0;
		if(id != null) {
			Project project = projectRepository.findById(Integer.parseInt(id));
			if(project != null) {
				project.setArchived(1);
				projectRepository.save(project);
				res = 1;
			}
		}
		
		return res;
	}
	
	/**
	 * GET archive a project in the database by its id.
	 * 
	 * @param id the database ID (not the GitLab project's ID)
	 * @return true if the project has been unarchived
	 */
	@GetMapping("/api/v1/unarchive/{id}") 
	public int unarchiveProject(@PathVariable String id)
	{
		int res = 0;
		if(id != null) {
			Project project = projectRepository.findById(Integer.parseInt(id));
			if(project != null) {
				project.setArchived(-1);
				projectRepository.save(project);
				res = 1;
			}
		}
		
		return res;
	}
	
}
