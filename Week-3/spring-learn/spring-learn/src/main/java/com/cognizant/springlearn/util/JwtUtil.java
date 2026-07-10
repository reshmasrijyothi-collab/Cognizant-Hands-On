package com.cognizant.springlearn.util;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    // For a real project, load this from a secrets manager / config, never hard-code it.
    private final Key signingKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    private static final long VALIDITY_MS = 20 * 60 * 1000; // 20 minutes

    public String generateToken(String username) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + VALIDITY_MS))
                .signWith(signingKey, SignatureAlgorithm.HS256)
                .compact();
    }
}
