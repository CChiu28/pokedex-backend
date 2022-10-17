package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Moves;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class PokemonService {
    public Pokemon getPokemonFromApi(String name) {
        String url = "https://pokeapi.co/api/v2/pokemon/"+name;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Pokemon> response = restTemplate.getForEntity(url, Pokemon.class);
        return response.getBody();
    }

    public ArrayList<MoveInfo> getMoveInfo(Moves[] moves) {
        RestTemplate restTemplate = new RestTemplate();
        ArrayList<MoveInfo> moveInfo = new ArrayList<>();
        List<Moves> list = Arrays.asList(moves);
        list.stream().map(move -> {
            String url = "https://pokeapi.co/api/v2/move/"+move.getMove().getName();
            ResponseEntity<MoveInfo> response = restTemplate.getForEntity(url, MoveInfo.class);
            return response.getBody();
        }).forEach(moveInfo::add);
        return moveInfo;
    }
}
