package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.util.JwtUtil;

/**
 * Step 1 of the JWT process: accept Basic Auth credentials on /authenticate
 * and respond with a signed JWT.
 *
 * Sample request:
 *   curl -s -u user:pwd http://localhost:8090/authenticate
 * Sample response:
 *   {"token":"eyJhbGciOi..."}
 */
@RestController
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        logger.info("START - authenticate()");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // Decode the "Basic base64(username:password)" header
        String base64Credentials = authorizationHeader.substring("Basic ".length());
        String decoded = new String(Base64.getDecoder().decode(base64Credentials));
        String[] parts = decoded.split(":", 2);
        String username = parts[0];
        // String password = parts.length > 1 ? parts[1] : "";
        // NOTE: SecurityConfig performs the actual credential check before this
        // controller is reached, so by this point the user is authenticated.

        String token = jwtUtil.generateToken(username);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        logger.info("END - authenticate()");
        return ResponseEntity.ok(response);
    }
}
