package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.ToString;

@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
@Getter
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
}
