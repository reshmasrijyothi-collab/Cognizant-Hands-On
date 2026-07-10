package com.cognizant.springlearn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // In-memory user for the hands-on exercise: username "user", password "pwd"
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        User.UserBuilder users = User.builder();
        return new InMemoryUserDetailsManager(
                users.username("user")
                     .password(encoder.encode("pwd"))
                     .roles("USER")
                     .build()
        );
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests(auth -> auth
                .antMatchers("/authenticate").authenticated()
                .anyRequest().permitAll()
            )
            .httpBasic();

        return http.build();
    }
}
