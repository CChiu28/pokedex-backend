package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;

@Getter
@JsonIgnoreProperties(ignoreUnknown = false)
public class FlavorTextEntries {
    private String flavor_text;
    private Name language;
    private Name version_group;
}
