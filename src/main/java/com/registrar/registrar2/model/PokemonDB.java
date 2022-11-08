package com.registrar.registrar2.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;

@Document("PokemonTeams")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PokemonDB {
    private ObjectId id;
    private String users;
    private ArrayList<ArrayList<String>> pokemon;

    public PokemonDB(String users, ArrayList<ArrayList<String>> pokemon) {
        this.users = users;
        this.pokemon = pokemon;
    }
}
