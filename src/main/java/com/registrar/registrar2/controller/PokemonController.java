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
//        this.webClient = WebClient.builder().build();
//        String url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
//        RestTemplate restTemplate = new RestTemplate();
//        ResponseEntity<Pokemon> response = restTemplate.getForEntity(url, Pokemon.class);
//        Mono<Pokemon> response = WebClient.create().get().uri(url).retrieve().bodyToMono(Pokemon.class);
//        response.subscribe(poke -> System.out.println((poke.toString())));
//        System.out.println(url);
//        System.out.println(response);
        Pokemon response = pokemonService.getPokemonFromApi(pokemon);
        ArrayList<MoveInfo> moveInfo = pokemonService.getMoveInfo(response.getMoves());
        PokemonData data = new PokemonData(response,moveInfo);
        return data;
    }
}
