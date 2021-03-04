package com.registrar.registrar2.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Courses {

	@Id
	private String id;
	private String name;
	private String description;
	@ManyToOne
	private Subjects subject;
	
	public Courses() {
		
	}
	
	public Courses(String id, String name, String description, String subId) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.subject = new Subjects(subId, "", "");
	}
	
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Subjects getSubject() {
		return subject;
	}

	public void setSubject(Subjects subject) {
		this.subject = subject;
	}

	@Override
	public String toString() {
		return "Courses [id=" + id + ", name=" + name + ", description=" + description + "]";
	}

}
