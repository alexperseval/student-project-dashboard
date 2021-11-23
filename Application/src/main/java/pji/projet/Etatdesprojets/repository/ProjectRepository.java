package pji.projet.Etatdesprojets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import pji.projet.Etatdesprojets.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer>{
	List<Project> findByCourse(String course);
	
	Project findById(int id);
}
