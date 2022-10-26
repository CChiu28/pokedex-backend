package com.registrar.registrar2.security;

import javax.sql.DataSource;
import com.registrar.registrar2.service.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.reactive.config.CorsRegistry;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	DataSource ds;
	private final AppUserService userDetailService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(daoAuthenticationProvider());
//		auth.userDetailsService(userDetailService);
//		auth.jdbcAuthentication()
//			.dataSource(ds)
//			.withUser(
//					User.withUsername("user")
//						.password("user")
//						.roles("USER")
//			)
//			.withUser(
//					User.withUsername("admin")
//						.password("admin")
//						.roles("ADMIN")
//			);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests()
		http.csrf().disable().authorizeRequests()
//			.antMatchers("/**").hasRole("ADMIN")
				.antMatchers("/register","/students","/registerTeam","/pokemon","/pokemon/*","/pokemonGeneration","/pokemonGeneration/*","/index*","/*.js","/*.json","*.css").permitAll().anyRequest().authenticated()
//				.antMatchers("/*").permitAll().anyRequest().authenticated()
//			.and().formLogin().loginPage("/index.html").loginProcessingUrl("/perform_login").defaultSuccessUrl("/students",true)
//				.failureUrl("/index.html?error=true").and()
//				.logout().logoutUrl("/perform_logout");
				.and().oauth2ResourceServer().jwt();
	}

	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(bCryptPasswordEncoder);
		provider.setUserDetailsService(userDetailService);
		return provider;
	}
}
