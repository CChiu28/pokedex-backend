package com.registrar.registrar2.repository;

import com.registrar.registrar2.model.PokemonDB;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PokemonDBRepository extends JpaRepository<PokemonDB, Integer> {
    Optional<PokemonDB> findById(Integer id);
    Optional<PokemonDB> deleteByTeamName(Integer id);
}
