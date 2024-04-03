import { LocationResponse } from "../types/location";
import { get } from "./BaseService";

export const getAllLocations = async (page: number) => {
  return get<LocationResponse>(`location?page=${page}`);
};
