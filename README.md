# pokedex-backend

This is an API created in tandem with a [pokedex frontend](https://github.com/CChiu28/pokedex). It utilizes Spring Boot and [pokeAPI](https://pokeapi.co/).
The following endpoints are available:

* /api/pokemon/{name}
  * value: {name} : Name of a pokemon
  * returns: A Pokemon object containing data of the following:
    * name
    * Pokemon abilities
    * types
    * moves
    * base stats
    * sprites
 
* /api/pokemon/moves
  * Given an array of Moves class, returns an arrayList of MoveInfo class, containing data for the move including:
    * name of move
    * accuracy
    * pp
    * type
    * description of move
    
* /api/pokemonGeneration
  * returns an array of Pokemon generations for the games
  
* /api/registerTeam
  * given a PokemonRequest class, registers data to MongoDB

* /api/getTeams/{uid}
  * retrieves the pokemon teams of a user from MongoDB
  * value: {uid} : ID of the user
  * returns: A PokemonDB object containing:
    * user
    * a list of ArrayLists of Pokemon objects. Each ArrayList of Pokemon objects represents a team of Pokemon that was saved
    
* /api/deleteTeam/{uid}/{index}
  * Given a user {uid} and an {index}, it will retrieve the user and the user's pokemon teams and deletes the team at {index}
