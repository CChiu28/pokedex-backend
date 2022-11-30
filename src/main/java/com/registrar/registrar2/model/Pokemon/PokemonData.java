package com.registrar.registrar2.model.Pokemon;

import lombok.Getter;
import lombok.ToString;
import java.util.ArrayList;

@Getter
@ToString
public class PokemonData {
    private Pokemon pokemon;
    private ArrayList<MoveInfo> moveInfo;

    public PokemonData(Pokemon pokemon, ArrayList<MoveInfo> moveInfo) {
        this.pokemon = pokemon;
        this.moveInfo = moveInfo;
    }
}
