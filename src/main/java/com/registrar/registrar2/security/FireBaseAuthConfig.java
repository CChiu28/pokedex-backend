package com.registrar.registrar2.security;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import java.io.IOException;

@Configuration
public class FireBaseAuthConfig {
    @Value("classpath:service-account.json")
    private Resource serviceAccount;

    @Bean
    public FirebaseAuth fireBaseAuth() throws IOException {
        FirebaseOptions options = FirebaseOptions.builder().setCredentials(GoogleCredentials.fromStream(serviceAccount.getInputStream())).build();
        FirebaseApp firebaseApp = FirebaseApp.initializeApp(options);
        return FirebaseAuth.getInstance(firebaseApp);
    }
}
