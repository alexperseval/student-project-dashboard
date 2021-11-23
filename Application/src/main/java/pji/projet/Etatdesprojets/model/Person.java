package pji.projet.Etatdesprojets.model;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

/**
 * This class represents a Person, who can be either a Professor or a Student.
 * It is stored in the database.
 * 
 * @author Tanguy Debacker - Alexandre Perseval
 *
 */
@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="person_type")
public abstract class Person {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)	
	protected int id;
	protected String firstName;
	protected String surname;
	protected String mail;
	protected String groupe;
	
	public Person() {}
	
	public Person(String firstName, String surname, String mail, String groupe) {
		super();
		this.firstName = firstName;
		this.surname = surname;
		this.mail = mail;
		this.groupe = groupe;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}
	
	public String getGroupe() {
		return groupe;
	}

	public void setGroupe(String groupe) {
		this.groupe = groupe;
	}
}
