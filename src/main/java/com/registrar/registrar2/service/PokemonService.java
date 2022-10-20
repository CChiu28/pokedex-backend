package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Pokemon.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class PokemonService {
//    @Autowired
//    private WebClient webClient;
    public Pokemon getPokemonFromApi(String name) {
        String url = "https://pokeapi.co/api/v2/pokemon/"+name;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Pokemon> response = restTemplate.getForEntity(url, Pokemon.class);
        return response.getBody();
    }

    public ArrayList<MoveInfo> getMoveInfo(Moves[] moves) {
        RestTemplate restTemplate = new RestTemplate();
        WebClient webClient = WebClient.create();
        ArrayList<MoveInfo> moveInfo = new ArrayList<>();
        List<Moves> list = Arrays.asList(moves);
        list.stream().map(move -> {
            String url = "https://pokeapi.co/api/v2/move/" + move.getMove().getName();
//            ResponseEntity<MoveInfo> response = restTemplate.getForEntity(url, MoveInfo.class);
            Mono<MoveInfo> response = webClient.get().uri(url).retrieve().bodyToMono(MoveInfo.class);
            return response.block();
        }).forEach(moveInfo::add);
        return moveInfo;
    }

    public Generations getGeneration(String gen) {
        String url = "https://pokeapi.co/api/v2/generation/"+gen;
        WebClient webClient = WebClient.create();
        ArrayList<Generations> Names = new ArrayList<>();
        Mono<Generations> res = webClient.get().uri(url).retrieve().bodyToMono(Generations.class);
        return res.block();
    }
}
