import { CharacterResponse } from "../types/character";
import { get } from "./BaseService";

export const getAllCharacters = async (page: number) => {
  return get<CharacterResponse>(`character?page=${page}`);
};

// export const getAllLocations = async () => {
//   return get<LocationResponse>("locations");
// TODO};
