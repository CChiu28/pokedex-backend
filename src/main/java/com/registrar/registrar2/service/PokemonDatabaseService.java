package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.repository.PokemonDBRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@AllArgsConstructor
public class PokemonDatabaseService {
    private MongoTemplate mongoTemplate;
    private PokemonDBRepository pokemonDBRepository;

    public void registerTeam(PokemonRequest names) {
        PokemonDB db = mongoTemplate.findOne(Query.query(Criteria.where("users").is(names.getId())),PokemonDB.class);
        if (db==null) {
            ArrayList<ArrayList<Pokemon>> team = new ArrayList<>();
            team.add(names.getPokemon());
            pokemonDBRepository.save(new PokemonDB(names.getId(),team));
        } else if ((Integer.parseInt(names.getIndex())<db.getPokemon().size())&&names.getUniqueId()!=null){
            db.getPokemon().set(Integer.parseInt(names.getIndex()),names.getPokemon());
            pokemonDBRepository.save(db);
        } else {
            db.getPokemon().add(names.getPokemon());
            pokemonDBRepository.save(db);
        }
    }

    public PokemonDB deleteTeam(String uid, int index) {
        PokemonDB db = mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
        if (db!=null) {
            db.getPokemon().remove(index);
            System.out.println(db);
            pokemonDBRepository.save(db);
        }
        return db;
    }

    public PokemonDB getTeam(String uid) {
        return mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
    }
}
