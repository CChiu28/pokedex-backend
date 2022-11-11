package com.registrar.registrar2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
@AllArgsConstructor
public class PokemonRequest {
    private String id;
    private String index;
    private ArrayList<String> pokemon;
//    private PokemonTeam pokemon;
    public class PokemonTeam {
        private String id;
        private ArrayList<ArrayList<String>> pokemon;
    }
}
