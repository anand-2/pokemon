import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {GET_POKEMONS}  from "../graphql/fetchPokemon";
import CardComponent from "./components/CardComponent"
import styles from "../styles/Home.module.css"
import { Button } from "@mui/material";
import { Row,Col } from "react-bootstrap";


function pokemonContainer()
{
    const { data: { pokemons = [] } = {} }=  useQuery(GET_POKEMONS,{variables : {first : 20}})
        
    return (
        <>
        <div className={styles.container}>
            {pokemons && pokemons.map(pokemon => <CardComponent key = {pokemon.id} pokemon = {pokemon} />)}
        </div>
       
        </>
    )
}


export default pokemonContainer