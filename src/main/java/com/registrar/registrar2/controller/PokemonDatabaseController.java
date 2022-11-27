package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.service.PokemonDatabaseService;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins= {"https://cchiu28-pokedex.netlify.app/","http://localhost:3000"})
public class PokemonDatabaseController {
    private PokemonDatabaseService pokemonDatabaseService;
    private MongoTemplate mongoTemplate;

    @PostMapping("/registerTeam")
    public void registerTeam(@RequestBody PokemonRequest names) {
        pokemonDatabaseService.registerTeam(names);
    }

    @GetMapping("/getTeams/{uid}")
    public PokemonDB getTeams(@PathVariable String uid) {
        return mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
    }

    @GetMapping("/deleteTeam/{uid}/{index}")
    public PokemonDB deleteTeam(@PathVariable("uid") String uid, @PathVariable("index") String index) {
        System.out.println(index);
        return pokemonDatabaseService.deleteTeam(uid,Integer.parseInt(index));
    }
}
