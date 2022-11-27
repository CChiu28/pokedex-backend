package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;

@Getter
@JsonIgnoreProperties(ignoreUnknown = false)
public class EffectEntries {
    private String effect;
    private Name language;
    private String short_effect;
}
