package com.registrar.registrar2.controller;

import com.registrar.registrar2.model.PokemonDB;
import com.registrar.registrar2.model.PokemonRequest;
import com.registrar.registrar2.service.PokemonDatabaseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins= {"https://cchiu28-pokedex.netlify.app/","http://localhost:3000"})
public class PokemonDatabaseController {
    private PokemonDatabaseService pokemonDatabaseService;

    @PostMapping("/registerTeam")
    public void registerTeam(@RequestBody PokemonRequest names) {
        pokemonDatabaseService.registerTeam(names);
    }

    @GetMapping("/getTeams/{uid}")
    public PokemonDB getTeams(@PathVariable String uid) {
        return pokemonDatabaseService.getTeam(uid);
    }

    @GetMapping("/deleteTeam/{uid}/{index}")
    public PokemonDB deleteTeam(@PathVariable("uid") String uid, @PathVariable("index") String index) {
        System.out.println(index);
        return pokemonDatabaseService.deleteTeam(uid,Integer.parseInt(index));
    }
}
