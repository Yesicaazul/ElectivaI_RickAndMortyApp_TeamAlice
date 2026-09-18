//con una función asíncrona vamos a obtener los datos de la api
import type { CharacterResponse } from "../types/api";
const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters(): Promise<CharacterResponse> {
  const response = await fetch(API_URL); 

  if (!response.ok){
    throw new Error("No se pudieron recuperar los personajes");
  }
  return response.json() as Promise<CharacterResponse>;
}