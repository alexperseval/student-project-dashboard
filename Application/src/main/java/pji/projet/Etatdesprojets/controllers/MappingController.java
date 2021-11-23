package pji.projet.Etatdesprojets.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import pji.projet.Etatdesprojets.form.ProjectForm;
import pji.projet.Etatdesprojets.model.Professor;
import pji.projet.Etatdesprojets.model.Project;
import pji.projet.Etatdesprojets.model.Student;
import pji.projet.Etatdesprojets.repository.ProfessorRepository;
import pji.projet.Etatdesprojets.repository.ProjectRepository;
import pji.projet.Etatdesprojets.repository.StudentRepository;

/**
 * This class is a controller used to map used web pages to help our
 * React routing. Every used pages are redirected towards the home page
 * then the React routing correctly map without reloading the page.
 * So in the process, first the server maps towards the home page, then 
 * the React routing maps towards the requested page.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
@Controller
class MappingController {
	
	// private String accessToken = "mFPzhznjj4rBhsQ3GYWT";
	
	private ProjectRepository projectRepository;
	private StudentRepository studentRepository;
	private ProfessorRepository professorRepository;

    public MappingController(ProjectRepository pr, StudentRepository sr, ProfessorRepository prr) {
        this.projectRepository = pr;
        this.studentRepository = sr;
        this.professorRepository = prr;
    }
    
	@Value("${error.message}")
    private String errorMessage;
	
	@GetMapping("/error")
	public String showError(Model model) {
		return "error.html";
	}
	
	@GetMapping("/")
	public String home() {
		return "home";
	}
	
	@GetMapping("/home")
	public String home2() {
		return "home";
	}
	
	@GetMapping("/projectList")
	public String projectList() {
		return "home";
	}
	
	@GetMapping("/projectList/{id}")
	public String project() {
		return "home";
	}
	
	/**
	 * @see pji.projet.Etatdesprojets.controllers.MappingController#saveProject()
	 * 
	 * @param model contains an empty project form ready to be filled
	 * @return a string indicating which web page must be opened
	 */
	@RequestMapping(value = { "/addProject" }, method = RequestMethod.GET)
    public String showAddProjectPage(Model model) {
		ProjectForm projectForm = new ProjectForm();
        model.addAttribute("projectForm", projectForm);

        return "addProject";
    }
	
	/**
	 * Save a project in the database, based on a form from the web app.
	 * It is currently made with thymeleaf to help us testing the app by 
	 * adding projects to it.
	 * 
	 * @param projectForm an empty formProject object sent by the controller
	 * @return redirect to the projectList page
	 */
    @RequestMapping(value = { "/addProject" }, method = RequestMethod.POST)
    public String saveProject(@ModelAttribute("projectForm") ProjectForm projectForm) {
    	// general infos
    	int projectId = projectForm.getProjectId();
    	String projectName = projectForm.getProjectName();
    	String course = projectForm.getCourse();
    	String projectDescription = projectForm.getProjectDescription();
    	String gitUrl = projectForm.getGitUrl();
    	String token = projectForm.getToken();
    	String gitRoot = projectForm.getGitRoot();
    	
    	// prof
    	String profFirstName = projectForm.getProfFirstName();
    	String profSurname = projectForm.getProfSurname();
    	String profMail = projectForm.getProfMail();
    	Professor professor = new Professor(profFirstName, profSurname, profMail);
    	
    	//TODO: modèle ici à 2 étudiants, dans l'idée devrait pouvoir être entre 1 et x étudiants
    	// student 1
    	String student1FirstName = projectForm.getStudent1FirstName();
    	String student1Surname = projectForm.getStudent1Surname();
    	String student1Mail = projectForm.getStudent1Mail();
    	String student1Group = projectForm.getStudent1Group();
    	Student student1 = new Student(student1FirstName, student1Surname, student1Mail, student1Group);
    	
    	// student 2
    	String student2FirstName = projectForm.getStudent2FirstName();
    	String student2Surname = projectForm.getStudent2Surname();
    	String student2Mail = projectForm.getStudent2Mail();
    	String student2Group = projectForm.getStudent2Group();
    	Student student2 = new Student(student2FirstName, student2Surname, student2Mail, student2Group);
    	
    	List<Student> students = new ArrayList<Student>();
		students.add(student1);
		students.add(student2);
		
 
        //TODO: contrôler les saisies
		
    	Project newProject = new Project(projectId, projectId, projectName, course, professor, students,
    			projectDescription, gitUrl, token, gitRoot);
    	
    	//Ajout dans la database
    	professorRepository.save(professor);
    	studentRepository.save(student1);    	
    	studentRepository.save(student2);
    	projectRepository.save(newProject);

        return "redirect:/projectList";
    }
    

}
