package com.registrar.registrar2.model.Pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;

@JsonIgnoreProperties(ignoreUnknown = false)
@Getter
public class Types {
    private Name type;
    private int slot;
}
