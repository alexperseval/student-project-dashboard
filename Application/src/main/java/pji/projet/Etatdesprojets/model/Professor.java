package pji.projet.Etatdesprojets.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Professor")
public class Professor extends Person {

	public Professor() { super();}
	
	public Professor(String firstName, String surname, String mail) {
		super(firstName, surname, mail, "PROFESSOR");
	}

}
