import Head from 'next/head'
import Image from 'next/image'
import PokemonContainer from './pokemonContainer';
import { useState } from 'react';



export default function Home() {

  
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head> 
    
      <PokemonContainer ></PokemonContainer>
    </>
  );
}
