package com.registrar.registrar2.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.SequenceGenerator;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Student")
@Table(name = "student")
public class Student {

	@Id
	@SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
	@GeneratedValue(strategy = SEQUENCE, generator = "student_sequence")
	@Column(name = "dbid", updatable = false)
	private Long dbId;
	@Column(name = "id", unique = true, nullable = false)
	private String id;
	@Column(name = "fname", nullable = false, columnDefinition = "TEXT")
	private String firstName;
	@Column(name = "lname", nullable = false, columnDefinition = "TEXT")
	private String lastName;
	@Column(name = "user_name", columnDefinition = "TEXT")
	private String userName;
	@Column(name = "password", columnDefinition = "TEXT")
	private String password;
	private boolean active;
	private String roles;
	
	public Student() {
		
	}
	
	public Student(String id, String fName, String lName) {
		this.id = id;
		this.firstName = fName;
		this.lastName = lName;
	}
	
	public String getId() {
		return this.id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return this.firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return this.lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getDbId() {
		return this.dbId;
	}

	public void setDbId(Long dbId) {
		this.dbId = dbId;
	}
	
	@Override
	public String toString() {
		return "Student{" +
			"id="+id+", firstName='"+ firstName + '\''+", lastName='"+ lastName +'\''+'}';
	}
	
	@Override
	public boolean equals(Object o) {
		if (this==o) return true;
		if (o==null || getClass()!=o.getClass()) return false;
		Student student = (Student) o;
		return Objects.equals(id, student.id) &&
			Objects.equals(firstName, student.firstName) &&
			Objects.equals(lastName, student.lastName);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, firstName, lastName);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}
}
