package mini_tms.controller;

import mini_tms.model.Conducteur;
import mini_tms.model.Trajet;
import mini_tms.service.TrajetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/trajets")
@CrossOrigin(origins = "*") // utile pour autoriser React à appeler l'API
public class TrajetController {

    private final TrajetService trajetService;

    public TrajetController(TrajetService trajetService) {
        this.trajetService = trajetService;
    }

    // ✅ GET all trajets
    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Trajet> trajets = trajetService.getAll();
        if (trajets.isEmpty()) {
            return ResponseEntity.ok(Map.of("message", "Aucun trajet trouvé"));
        }
        return ResponseEntity.ok(trajets);
    }

    // ✅ GET trajet by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getTrajetById(@PathVariable Long id) {
        try {
            Optional<Trajet> trajet = trajetService.getById(id);
            return ResponseEntity.ok(trajet);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        }
    }
    // ✅ POST create new trajet
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Trajet trajet) {
        try {
            Trajet created = trajetService.create(trajet);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Erreur lors de la création du trajet"));
        }
    }

    // ✅ DELETE trajet by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Trajet> existing = trajetService.getById(id);
        if (existing.isPresent()) {
            trajetService.delete(id);
            return ResponseEntity.ok(Map.of("message", "Trajet supprimé"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Trajet non trouvé"));
        }
    }
}
