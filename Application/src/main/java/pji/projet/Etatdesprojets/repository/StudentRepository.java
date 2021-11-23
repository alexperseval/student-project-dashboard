package pji.projet.Etatdesprojets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pji.projet.Etatdesprojets.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	
}
