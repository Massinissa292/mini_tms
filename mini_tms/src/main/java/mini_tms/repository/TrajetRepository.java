package mini_tms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import mini_tms.model.Conducteur;
import mini_tms.model.Trajet;

public interface TrajetRepository extends JpaRepository<Trajet, Long> {
    // tu peux ajouter des méthodes personnalisées ici si tu veux
}
