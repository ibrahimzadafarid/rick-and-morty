import { LocationModel } from "../../../types/location";

const LocationCard = (location: LocationModel) => {
  return (
    <>
      <div>{location.residents}</div>
    </>
  );
};

export default LocationCard;
