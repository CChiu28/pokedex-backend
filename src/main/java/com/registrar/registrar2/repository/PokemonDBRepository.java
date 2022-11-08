package com.registrar.registrar2.repository;

import com.registrar.registrar2.model.PokemonDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PokemonDBRepository extends MongoRepository<PokemonDB, String> {
    @Query("{users:'?0'}")
    List<PokemonDB> findByUsers(String uid);
//    Optional<PokemonDB> deleteByTeamName(Integer id);
}
