package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.Pokemon.Pokemon;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@AllArgsConstructor
public class PokemonController {
//    private WebClient webClient;
    @CrossOrigin()
    @PostMapping("/pokemon/{pokemon}")
    public Pokemon getPokemon(@PathVariable String pokemon) {
//        this.webClient = WebClient.builder().build();
        String url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Pokemon> response = restTemplate.getForEntity(url, Pokemon.class);
//        Mono<Pokemon> response = WebClient.create().get().uri(url).retrieve().bodyToMono(Pokemon.class);
//        response.subscribe(poke -> System.out.println((poke.toString())));
        System.out.println(url);
        System.out.println(response);
        return response.getBody();
    }
}
