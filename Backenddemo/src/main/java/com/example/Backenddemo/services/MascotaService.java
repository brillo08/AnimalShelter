package com.example.Backenddemo.services;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.Backenddemo.model.Mascota;
import com.example.Backenddemo.repository.MascotaRepository;

import java.util.List;

@Service
public class MascotaService {

    private final MascotaRepository mascotaRepository;

    public MascotaService(MascotaRepository mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }

    // Método para crear una nueva mascota
    public void createMascota(Mascota mascota) {
        // se hace las validaciones
        if(mascota == null){
            throw new IllegalArgumentException("La mascota no puede ser nula");
        }
        if(mascota.getName() == null ){
            throw new IllegalArgumentException("El nombre de la mascota es obligatoria");
        }
        if (mascota.getRaza()== null) {
            throw new IllegalArgumentException("La Raza de la mascota es obligatoria");
        }
        if (mascota.getPeso()<= 0) {
            throw new IllegalArgumentException("La Raza de la mascota es obligatoria");
        }
        if (mascota.getEdad() < 0) {
            throw new IllegalArgumentException("La Raza de la mascota es obligatoria");
        }
        // Aquí guardamos la mascota en la base de datos
        mascotaRepository.save(mascota);
    }


    // Método para listar todas las mascotas
    public List<Mascota> listarMascotas() {
        return mascotaRepository.findAll();

    }
    // Método para eliminar mascota
    public void eliminarMascota(Long idmascotas){
        //verifica si la mascota existe antes de eliminarla
        if (!mascotaRepository.existsById(idmascotas)) {
            throw new IllegalArgumentException("No se encontro una mascota con el ID especificado: " +idmascotas);
        }
        //elimina la mascota
        mascotaRepository.deleteById(idmascotas);
    }

    // Método para obtener una mascota por ID
    public Mascota obtenerMascotasPorId(Long idmascotas) {
        return mascotaRepository.findById(idmascotas).orElse(null);
    }

    // Método para obtener todas las mascotas
    public List<Mascota> obtenerTodasLasMascotas() {
        return mascotaRepository.findAll();
    }

    // Método para actualizar una mascota
    public ResponseEntity<String> actualizarMascota(Long idmascotas, Mascota mascota) {
        if(!mascotaRepository.existsById(idmascotas)){
            return ResponseEntity.status(org.springframework.http.HttpStatus.NOT_FOUND).body("No se encontro una mascota con el ID especificado: " + idmascotas);
        }
        mascotaRepository.save(mascota);
        return ResponseEntity.ok("Mascota actualizada correctamente");
    }
}
