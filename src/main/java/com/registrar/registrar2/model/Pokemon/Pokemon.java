package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
@Getter
//@Entity(name = "pokemon")
public class Pokemon {
    private String name;
    private int order;
    private int id;
    private Abilities[] abilities;
    private Types[] types;
    private Moves[] moves;
    private Stats[] stats;
    private Sprites sprites;

    public Pokemon() {}

//    public String getName() {
//        return this.name;
//    }
//
//    public int getOrder() {
//        return this.order;
//    }
//
//    public Abilities[] getAbilities() {
//        return this.abilities;
//    }
//
//    public Types[] getTypes() {
//        return this.types;
//    }
//
//    public Moves[] getMoves() {
//        return this.moves;
//    }
//
//    public Stats[] getStats() {
//        return this.stats;
//    }
//
//    public Sprites getSprites() {
//        return this.sprites;
//    }
}
