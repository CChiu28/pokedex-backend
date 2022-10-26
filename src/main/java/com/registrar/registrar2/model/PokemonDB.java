package com.registrar.registrar2.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "pokemon")
@Table(name  = "Pokemon")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PokemonDB {
    @Column(name="id")
    @Id
    private Integer id;
    @Column(name="name")
    private String teamName;
    @Column(name="pokemon", columnDefinition = "TEXT")
    private String pokemon;
//    @Column(name="pokemon2", columnDefinition = "TEXT")
//    private String pokemon2;
//    @Column(name="pokemon3", columnDefinition = "TEXT")
//    private String pokemon3;
//    @Column(name="pokemon4", columnDefinition = "TEXT")
//    private String pokemon4;
//    @Column(name="pokemon5", columnDefinition = "TEXT")
//    private String pokemon5;
//    @Column(name="pokemon6", columnDefinition = "TEXT")
//    private String pokemon6;

//    public PokemonDB(String pokemon1, String pokemon2, String pokemon3, String pokemon4, String pokemon5, String pokemon6) {
//        this.pokemon1 = pokemon1;
//        this.pokemon2 = pokemon2;
//        this.pokemon3 = pokemon3;
//        this.pokemon4 = pokemon4;
//        this.pokemon5 = pokemon5;
//        this.pokemon6 = pokemon6;
//    }

    public PokemonDB(Integer id, List<String> pokemon) {
        this.id = id;
        this.pokemon = pokemon.toString();
    }
}
