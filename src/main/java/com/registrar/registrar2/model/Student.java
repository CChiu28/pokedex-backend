package com.registrar.registrar2.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Student")
public class Student {
	
	@Id
//	@GeneratedValue
//	private Long dbid;
	private String id;
	private String fname;
	private String lname;
	private String userName;
	private String password;
	private boolean active;
	private String roles;
	
	public Student() {
		
	}
	
	public Student(String id, String fname, String lname) {
		this.id = id;
		this.fname = fname;
		this.lname = lname;
	}
	
	public String getId() {
		return this.id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getFname() {
		return this.fname;
	}
	
	public void setFname(String fname) {
		this.fname = fname;
	}
	
	public String getLname() {
		return this.lname;
	}
	
	public void setLname(String lname) {
		this.lname = lname;
	}
	
	@Override
	public String toString() {
		return "Student{" +
			"id="+id+", fname='"+fname + '\''+", lname='"+lname+'\''+'}';
	}
	
	@Override
	public boolean equals(Object o) {
		if (this==o) return true;
		if (o==null || getClass()!=o.getClass()) return false;
		Student student = (Student) o;
		return Objects.equals(id, student.id) &&
			Objects.equals(fname, student.fname) &&
			Objects.equals(lname, student.lname);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, fname, lname);
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
