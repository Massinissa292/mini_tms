package mini_tms.controller;

import mini_tms.model.Trajet;
import mini_tms.model.Vehicule;
import mini_tms.service.VehiculeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicules")
@CrossOrigin(origins = "*") // Pour autoriser les appels depuis React
public class VehiculeController {

    private final VehiculeService vehiculeService;

    public VehiculeController(VehiculeService vehiculeService) {
        this.vehiculeService = vehiculeService;
    }

    // ✅ GET all vehicules
    @GetMapping
    public ResponseEntity<?> getAllVehicules() {
        List<Vehicule> vehicules = vehiculeService.getAllVehicules();
        if (vehicules.isEmpty()) {
            return ResponseEntity.ok(Map.of("message", "Aucun véhicule trouvé"));
        }
        return ResponseEntity.ok(vehicules);
    }

    // ✅ GET vehicule by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getVehiculeById(@PathVariable Long id) {
        try {
          Optional<Vehicule>vehicule=vehiculeService.getVehiculeById(id);
            return ResponseEntity.ok(vehicule);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    // ✅ POST create new vehicule
    @PostMapping
    public ResponseEntity<?> createVehicule(@RequestBody Vehicule vehicule) {
        try {
            Vehicule created = vehiculeService.createVehicule(vehicule);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Erreur lors de la création du véhicule"));
        }
    }

    // ✅ PUT update vehicule
    @PutMapping("/{id}")
    public ResponseEntity<?> updateVehicule(@PathVariable Long id, @RequestBody Vehicule updatedVehicule) {
        Vehicule updated = vehiculeService.updateVehicule(id, updatedVehicule);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Véhicule non trouvé pour la mise à jour"));
        }
    }

    // ✅ DELETE vehicule
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVehicule(@PathVariable Long id) {
        Optional<Vehicule> vehicule = vehiculeService.getVehiculeById(id);
        if (vehicule.isPresent()) {
            vehiculeService.deleteVehicule(id);
            return ResponseEntity.ok(Map.of("message", "Véhicule supprimé"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Véhicule non trouvé"));
        }
    }
}
