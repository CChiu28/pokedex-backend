package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.Generations;
import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Moves;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;


@RestController
@AllArgsConstructor
public class PokemonController {
    private PokemonService pokemonService;
    private MongoTemplate mongoTemplate;

//    @CrossOrigin()
    @PostMapping("/pokemon/{pokemon}")
    public Pokemon getPokemon(@PathVariable String pokemon) {
        return pokemonService.getPokemonFromApi(pokemon);
    }

//    @CrossOrigin()
    @PostMapping("/pokemon/moves")
    public ArrayList<MoveInfo> getMovesData(@RequestBody Moves[] moves) {
        return pokemonService.getMoveInfo(moves);
    }
//    @CrossOrigin()
    @GetMapping("/pokemonGeneration")
    public Generations getGenerationList() {
        return pokemonService.getGeneration();
    }

//    @CrossOrigin()
    @PostMapping("/registerTeam")
    public void registerTeam(@RequestBody PokemonRequest names) {
//        System.out.println(names.getPokemon());
        pokemonService.registerTeam(names);
    }

    @GetMapping("/getTeams/{uid}")
    public PokemonDB getTeams(@PathVariable String uid) {
        return mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
    }

    @GetMapping("/deleteTeam/{uid}/{index}")
    public PokemonDB deleteTeam(@PathVariable("uid") String uid, @PathVariable("index") String index) {
        System.out.println(index);
        return pokemonService.deleteTeam(uid,Integer.parseInt(index));
    }
//    @GetMapping(path = "/test")
//    public String test(Principal principal) {
//        return principal.getName();
//    }
}
