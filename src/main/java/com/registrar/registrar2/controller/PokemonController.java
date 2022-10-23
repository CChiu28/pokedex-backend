package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.*;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;


@RestController
@AllArgsConstructor
public class PokemonController {
//    private WebClient webClient;
    private PokemonService pokemonService;

    @CrossOrigin()
    @PostMapping("/pokemon/{pokemon}")
    public Pokemon getPokemon(@PathVariable String pokemon) {
        Pokemon response = pokemonService.getPokemonFromApi(pokemon);
//        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(response.getMoves());
//        PokemonData data = new PokemonData(response,moveInfo);
        return response;
    }

    @CrossOrigin()
    @PostMapping("/pokemon/moves")
    public ArrayList<MoveInfo> getMovesData(@RequestBody Moves[] moves) {
        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(moves);
        return moveInfo;
    }
    @CrossOrigin()
    @GetMapping("/pokemonGeneration")
    public Generations getGenerationList() {
        return pokemonService.getGeneration();
    }
    @GetMapping(path = "/test")
    public String test(Principal principal) {
        return principal.getName();
    }
}
