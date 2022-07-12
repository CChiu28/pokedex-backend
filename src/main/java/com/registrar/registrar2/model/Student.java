package com.registrar.registrar2.model;

import lombok.*;
import javax.persistence.*;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Student")
@Table(name = "student")
@Getter
@Setter
@EqualsAndHashCode
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Student {

	@Id
	@SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
	@GeneratedValue(strategy = SEQUENCE, generator = "student_sequence")
	@Column(name = "dbid", updatable = false)
	private Long dbId;
	@Column(name = "id", columnDefinition = "INTEGER")
	private Integer id;
	@Column(name = "firstName", columnDefinition = "TEXT")
	private String firstName;
	@Column(name = "lastName", columnDefinition = "TEXT")
	private String lastName;
	@Column(name = "userName", columnDefinition = "TEXT")
	private String userName;
	@Column(name = "password", columnDefinition = "TEXT")
	private String password;
	private boolean active = true;
	@Enumerated(EnumType.STRING)
	private UserRoles roles;

	public Student(String firstName, String lastName, String userName, String password, UserRoles user) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.roles = user;
	}

//	public Student() {
//
//	}
	
//	public Student(int id, String fName, String lName, UserRoles roles) {
//		this.id = id;
//		this.firstName = fName;
//		this.lastName = lName;
//		this.roles = roles;
//	}
//
//	public Student(String fName, String lName, String userName, String password) {
//		this.firstName = fName;
//		this.lastName = lName;
//		this.userName = userName;
//		this.password = password;
//	}
	
//	public int getId() {
//		return this.id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getFirstName() {
//		return this.firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return this.lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public Long getDbId() {
//		return this.dbId;
//	}
//
//	public void setDbId(Long dbId) {
//		this.dbId = dbId;
//	}
//
//	@Override
//	public String toString() {
//		return "Student{" +
//			"id="+id+", firstName='"+ firstName + '\''+", lastName='"+ lastName +'\''+'}';
//	}
//
//	@Override
//	public boolean equals(Object o) {
//		if (this==o) return true;
//		if (o==null || getClass()!=o.getClass()) return false;
//		Student student = (Student) o;
//		return Objects.equals(id, student.id) &&
//			Objects.equals(firstName, student.firstName) &&
//			Objects.equals(lastName, student.lastName);
//	}
//
//	@Override
//	public int hashCode() {
//		return Objects.hash(id, firstName, lastName);
//	}
//
//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public boolean isActive() {
//		return active;
//	}
//
//	public void setActive(boolean active) {
//		this.active = active;
//	}
//
//	public UserRoles getRoles() {
//		return roles;
//	}
//
//	public void setRoles(UserRoles roles) {
//		this.roles = roles;
//	}
}
