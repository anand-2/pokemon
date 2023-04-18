import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
        id
        name
        image
        types
        
    }
  }
`

export const GET_PROPERTIES = gql`
query pokemon($name: String){
  pokemon(name: $name){
        id
        name
        image
        weaknesses
        types
        classification
        resistant
        height{
           maximum
        }
        weight{
          maximum
        }
    }
  }
`