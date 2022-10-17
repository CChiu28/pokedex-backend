package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.ToString;

@Getter
@JsonIgnoreProperties(ignoreUnknown = false)
@ToString
public class MoveInfo {
    private int id;
    private String name;
    private int accuracy;
    private int pp;
    private int power;
    private Name damage_class;
    private EffectEntries[] effect_entries;
    private FlavorTextEntries[] flavor_text_entries;
    private int effect_chance;
    private Name type;
}
