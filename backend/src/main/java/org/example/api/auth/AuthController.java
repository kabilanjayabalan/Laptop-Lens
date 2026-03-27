package org.example.api.auth;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final String DEMO_EMAIL = "demo@laptoplens.app";
    private static final String DEMO_PASSWORD = "LaptopLens123";

    @PostMapping("/login")
    public Map<String, Object> login(@Valid @RequestBody LoginRequest request) {
        if (!DEMO_EMAIL.equalsIgnoreCase(request.email()) || !DEMO_PASSWORD.equals(request.password())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        return Map.of(
                "message", "Login successful",
                "user", Map.of(
                        "name", "Demo User",
                        "email", DEMO_EMAIL,
                        "role", "Analyst"
                )
        );
    }
}
