package com.registrar.registrar2.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@EnableWebMvc
@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/*.js").addResourceLocations("/frontend/src/");
//        registry.addResourceHandler("/index.html").addResourceLocations("/frontend/public/index.html");
        registry.addResourceHandler("/webjars/**").addResourceLocations("/BOOT-INF/lib/");
    }
}
