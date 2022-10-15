package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = false)
public class Abilities {
    private Ability ability;

    public Ability getAbility() {
        return this.ability;
    }
}
