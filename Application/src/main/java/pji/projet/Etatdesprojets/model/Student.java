package pji.projet.Etatdesprojets.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Student")
public class Student extends Person {
	public Student() {super();}
	
	public Student(String firstName, String surname, String mail, String group) {
		super(firstName, surname, mail, group);
	}
}
