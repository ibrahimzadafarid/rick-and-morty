interface ResponceInfo {
  count: number;
  next?: string;
  pages: number;
  prev?: string;
}

interface LocationModel {
  id: number;
  name: string;
  dimension: string;
  residents: string[];
  url: string;
  creater: string;
}

interface LocationResponse {
  info: ResponceInfo;
  results: LocationModel[];
}

export type { LocationResponse, LocationModel };
