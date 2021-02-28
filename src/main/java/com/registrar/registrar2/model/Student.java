package com.registrar.registrar2.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue
//	private Long dbid;
	private int id=0;
	private String fname;
	private String lname;
	
	public Student() {
		
	}
	
	public Student(int id, String fname, String lname) {
		this.id = id;
		this.fname = fname;
		this.lname = lname;
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setId(int id) {
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
}
