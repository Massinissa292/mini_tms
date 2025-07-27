package mini_tms.service;

import mini_tms.model.Trajet;
import mini_tms.repository.TrajetRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrajetService {

    private final TrajetRepository trajetRepository;

    public TrajetService(TrajetRepository trajetRepository) {
        this.trajetRepository = trajetRepository;
    }

    public List<Trajet> getAll() {
        return trajetRepository.findAll();
    }

    public Optional<Trajet> getById(Long id) {
        return trajetRepository.findById(id);
    }

    public Trajet create(Trajet trajet) {
        return trajetRepository.save(trajet);
    }

    public void delete(Long id) {
        trajetRepository.deleteById(id);
    }
}

