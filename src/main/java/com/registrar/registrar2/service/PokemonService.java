package com.registrar.registrar2.service;

import com.registrar.registrar2.model.Pokemon.Generations;
import com.registrar.registrar2.model.Pokemon.MoveInfo;
import com.registrar.registrar2.model.Pokemon.Moves;
import com.registrar.registrar2.model.Pokemon.Pokemon;
import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.repository.PokemonDBRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
    private MongoTemplate mongoTemplate;
    private PokemonDBRepository pokemonDBRepository;
    public Pokemon getPokemonFromApi(String name) {
        String url = "https://pokeapi.co/api/v2/pokemon/"+name;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Pokemon> response = restTemplate.getForEntity(url, Pokemon.class);
        return response.getBody();
    }

    public ArrayList<MoveInfo> getMoveInfo(Moves[] moves) {
        WebClient webClient = WebClient.create();
        ArrayList<MoveInfo> moveInfo = new ArrayList<>();
        List<Moves> list = Arrays.asList(moves);
        list.stream().map(move -> {
            String url = "https://pokeapi.co/api/v2/move/" + move.getMove().getName();
            Mono<MoveInfo> response = webClient.get().uri(url).retrieve().bodyToMono(MoveInfo.class);
            return response.block();
        }).forEach(moveInfo::add);
        return moveInfo;
    }

    public Generations getGeneration() {
        String url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000";
        WebClient webClient = WebClient.create();
        Mono<Generations> res = webClient.get().uri(url).retrieve().bodyToMono(Generations.class);
        return res.block();
    }

    public void registerTeam(PokemonRequest names) {
        PokemonDB db = mongoTemplate.findOne(Query.query(Criteria.where("users").is(names.getId())),PokemonDB.class);
        System.out.println(names);
        if (db==null) {
            ArrayList<ArrayList<String>> team = new ArrayList<>();
            team.add(names.getPokemon());
            pokemonDBRepository.save(new PokemonDB(names.getId(),team));
        } else if (Integer.parseInt(names.getIndex())<db.getPokemon().size()){
            db.getPokemon().set(Integer.parseInt(names.getIndex()),names.getPokemon());
            pokemonDBRepository.save(db);
        } else {
            db.getPokemon().add(names.getPokemon());
            pokemonDBRepository.save(db);
        }
    }

    public PokemonDB deleteTeam(String uid, String index) {
        PokemonDB db = mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
        if (db!=null) {
            db.getPokemon().remove(Integer.parseInt(index));
            System.out.println(db);
            pokemonDBRepository.save(db);
        }
        return mongoTemplate.findOne(Query.query(Criteria.where("users").is(uid)),PokemonDB.class);
    }
}
