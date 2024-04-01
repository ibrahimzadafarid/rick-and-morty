interface ResponceInfo {
  count: number;
  next?: string;
  pages: number;
  prev?: string;
}

type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";
type Status = "Alive" | "Dead" | "unknown";

interface CharacterLocation {
  name: string;
  url: string;
}

interface CharacterModel {
  id: number;
  gender: CharacterGender;
  name: string;
  status: Status;
  species: string;
  type: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  img: string;
  episode: string[];
  url: string;
  creater: string;
}

interface CharacterResponse {
  info: ResponceInfo;
  results: CharacterModel[];
}

export type { CharacterResponse, CharacterModel };
