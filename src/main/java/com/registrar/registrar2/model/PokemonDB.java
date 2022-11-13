package com.registrar.registrar2.model;

import com.registrar.registrar2.model.Pokemon.Pokemon;
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
    private ArrayList<ArrayList<Pokemon>> pokemon;

    public PokemonDB(String users, ArrayList<ArrayList<Pokemon>> pokemon) {
        this.users = users;
        this.pokemon = pokemon;
    }
}
