package com.registrar.registrar2.model;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public class AppUserDetails implements org.springframework.security.core.userdetails.UserDetails {
	
	private String userName;
	private String password;
	@Enumerated(EnumType.STRING)
	private UserRoles userRole;
	private boolean active;
	private List<GrantedAuthority> authorities;
	
	public AppUserDetails(Student stud) {
		this.userName = stud.getUserName();
		this.password = stud.getPassword();
		this.active = stud.isActive();
		this.userRole = stud.getRoles();
//		this.authorities = Arrays.stream((stud).getRoles().split(","))
//				.map(SimpleGrantedAuthority::new)
//				.collect(Collectors.toList());
	}
	
	public AppUserDetails() {
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(userRole.name());
		return Collections.singletonList(authority);
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return active;
	}

}
