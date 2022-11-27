package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.Generations;
import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Moves;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@AllArgsConstructor
@CrossOrigin(origins= {"https://cchiu28-pokedex.netlify.app/","http://localhost:3000"})
public class PokemonController {
    private PokemonService pokemonService;
    private MongoTemplate mongoTemplate;

    @PostMapping("/pokemon/{pokemon}")
    public Pokemon getPokemon(@PathVariable String pokemon) {
        return pokemonService.getPokemonFromApi(pokemon);
    }

    @PostMapping("/pokemon/moves")
    public ArrayList<MoveInfo> getMovesData(@RequestBody Moves[] moves) {
        return pokemonService.getMoveInfo(moves);
    }

    @GetMapping("/pokemonGeneration")
    public Generations getGenerationList() {
        return pokemonService.getGeneration();
    }
}
