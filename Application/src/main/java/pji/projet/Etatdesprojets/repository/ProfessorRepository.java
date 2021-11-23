package pji.projet.Etatdesprojets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pji.projet.Etatdesprojets.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer>{
	
}
