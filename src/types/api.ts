// Definimos el tipo de datos que nos va a devolverla api
export interface CharacterLocation {
    name: string
    url: string
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ApiInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface CharacterResponse{
    info: ApiInfo;
    results: Character[];
}