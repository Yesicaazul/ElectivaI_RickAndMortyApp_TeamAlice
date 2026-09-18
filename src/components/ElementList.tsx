//componente para la lista de personajes
import type { Character } from "../types/api";
import { ElementCard } from "./ElementCard";

interface ElementListProps {
    characters: Character[];
}

export function ElementList({characters}: ElementListProps){
    return(
        <section>
            {characters.map((character) => (
                <ElementCard key={character.id} character={character} />
            ))}
        </section>
    );
}