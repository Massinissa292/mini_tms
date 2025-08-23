package mini_tms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import mini_tms.model.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
	 Optional<Utilisateur> findByEmail(String email);
}
