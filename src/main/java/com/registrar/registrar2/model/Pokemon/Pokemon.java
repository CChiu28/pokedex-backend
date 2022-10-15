package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.ToString;

@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
//@Entity(name = "pokemon")
public class Pokemon {
    private String name;
    private int order;
    private Abilities[] abilities;
    private Types[] types;

    public Pokemon() {}

    public String getName() {
        return this.name;
    }

    public int getOrder() {
        return this.order;
    }

    public Abilities[] getAbilities() {
        return this.abilities;
    }

    public Types[] getTypes() {
        return this.types;
    }
}
