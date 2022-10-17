package com.registrar.registrar2.model.Pokemon;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Moves {
    private Name move;
    private VersionGroupDetails[] version_group_details;
}
