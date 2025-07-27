package mini_tms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import mini_tms.model.Conducteur;

public interface ConducteurRepository extends JpaRepository<Conducteur, Long> {
    // tu peux ajouter des méthodes personnalisées ici si tu veux
}
