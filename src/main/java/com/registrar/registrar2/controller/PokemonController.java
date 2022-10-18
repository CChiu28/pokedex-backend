package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.model.Pokemon.PokemonData;
import com.registrar.registrar2.service.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@AllArgsConstructor
public class PokemonController {
//    private WebClient webClient;
    private PokemonService pokemonService;

    @CrossOrigin()
    @PostMapping("/pokemon/{pokemon}")
    public PokemonData getPokemon(@PathVariable String pokemon) {
        Pokemon response = pokemonService.getPokemonFromApi(pokemon);
        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(response.getMoves());
        PokemonData data = new PokemonData(response,moveInfo);
        return data;
    }
}
