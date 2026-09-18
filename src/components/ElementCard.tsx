//lo que va a mostrar cada tarjeta
import type { Character } from "../types/api";

interface ElementCardProps {
    character: Character;
}

export function ElementCard({character}: ElementCardProps){
    return (
        <article>
            <img src={character.image} alt={character.name}/>
            <h2> {character.name} </h2>
            <p>Status: {character.status} </p>
            <p>Species: {character.species} </p>
            <p>Gender: {character.gender} </p>
        </article>
    );
}