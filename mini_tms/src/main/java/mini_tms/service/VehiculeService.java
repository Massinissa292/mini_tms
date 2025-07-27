package mini_tms.service;

import mini_tms.model.Vehicule;
import mini_tms.repository.VehiculeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculeService {

    private final VehiculeRepository vehiculeRepository;

    public VehiculeService(VehiculeRepository vehiculeRepository) {
        this.vehiculeRepository = vehiculeRepository;
    }

    public List<Vehicule> getAllVehicules() {
        return vehiculeRepository.findAll();
    }

    public Optional<Vehicule> getVehiculeById(Long id) {
        return vehiculeRepository.findById(id);
    }

    public Vehicule createVehicule(Vehicule vehicule) {
        return vehiculeRepository.save(vehicule);
    }

    public Vehicule updateVehicule(Long id, Vehicule updatedVehicule) {
        return vehiculeRepository.findById(id)
            .map(vehicule -> {
              
                vehicule.setMatricule(updatedVehicule.getMatricule());
                vehicule.setType(updatedVehicule.getType());
                return vehiculeRepository.save(vehicule);
            })
            .orElse(null);
    }

    public void deleteVehicule(Long id) {
        vehiculeRepository.deleteById(id);
    }
}
