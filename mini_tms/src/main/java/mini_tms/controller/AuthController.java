package mini_tms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mini_tms.model.Utilisateur;
import mini_tms.repository.UtilisateurRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200") 
public class AuthController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Utilisateur loginRequest) {
        return utilisateurRepository.findByEmail(loginRequest.getEmail())
                .map(utilisateur -> {
                    if (utilisateur.getMotDePasse().equals(loginRequest.getMotDePasse())) {
                        return ResponseEntity.ok(utilisateur); // Connexion réussie
                    } else {
                        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Mot de passe incorrect");
                    }
                })
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Utilisateur introuvable"));
    }
}
