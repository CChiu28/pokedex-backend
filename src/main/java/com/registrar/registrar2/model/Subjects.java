package com.registrar.registrar2.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Subjects {
	@Id
	private String id;
	private String name;
	private String description;
	
	public Subjects() {
		
	}
	
	public Subjects(String id, String name, String descrip) {
		this.id = id;
		this.name = name;
		this.description = descrip;
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

	@Override
	public String toString() {
		return "Subjects [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
	
	
}
