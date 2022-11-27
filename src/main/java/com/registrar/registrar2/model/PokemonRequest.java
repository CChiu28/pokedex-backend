package com.registrar.registrar2.model;

import com.registrar.registrar2.model.Pokemon.Pokemon;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import java.util.ArrayList;

@Getter
@ToString
@AllArgsConstructor
public class PokemonRequest {
    private String id;
    private String index;
    private String uniqueId;
    private ArrayList<Pokemon> pokemon;
}
