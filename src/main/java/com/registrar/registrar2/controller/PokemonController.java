package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.Generations;
import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Moves;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.repository.PokemonDBRepository;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;


@RestController
@AllArgsConstructor
public class PokemonController {
//    private WebClient webClient;
    private PokemonService pokemonService;
    private PokemonDBRepository pokemonDBRepository;
    private MongoTemplate mongoTemplate;

//    @CrossOrigin()
    @PostMapping("/pokemon/{pokemon}")
    public Pokemon getPokemon(@PathVariable String pokemon) {
        Pokemon response = pokemonService.getPokemonFromApi(pokemon);
//        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(response.getMoves());
//        PokemonData data = new PokemonData(response,moveInfo);
        return response;
    }

//    @CrossOrigin()
    @PostMapping("/pokemon/moves")
    public ArrayList<MoveInfo> getMovesData(@RequestBody Moves[] moves) {
        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(moves);
        return moveInfo;
    }
//    @CrossOrigin()
    @GetMapping("/pokemonGeneration")
    public Generations getGenerationList() {
        return pokemonService.getGeneration();
    }

//    @CrossOrigin()
    @PostMapping("/registerTeam")
    public void registerTeam(@RequestBody PokemonRequest names) {
        System.out.println(names.getPokemon());
        PokemonDB db = mongoTemplate.findOne(Query.query(Criteria.where("users").is(names.getId())),PokemonDB.class);
        System.out.println(db);
        if (db==null) {
            ArrayList<ArrayList<String>> team = new ArrayList<>();
            team.add(names.getPokemon());
            pokemonDBRepository.save(new PokemonDB(names.getId(), team));
        } else {
            db.getPokemon().add(names.getPokemon());
            pokemonDBRepository.save(db);
        }
        pokemonService.registerTeam(names);
    }

    @GetMapping("/getTeams/{uid}")
    public PokemonDB getTeams(@PathVariable String uid) {
        return mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
    }
    @GetMapping(path = "/test")
    public String test(Principal principal) {
        return principal.getName();
    }
}
