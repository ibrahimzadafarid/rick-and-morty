// import { CharacterModel } from "../../../types/character";

// const CharacterCard = (char: CharacterModel) => {
//   // TODO create character cards!
//   return (
//     <>
//       <div>{char.img}</div>
//       <div>{char.name}</div>
//       <div>{char.gender}</div>
//       <div>{char.status}</div>
//     </>
//   );
// };

// export default CharacterCard;

import { CharacterModel } from "../../../types/character";

const CharacterCard = (char: CharacterModel) => {
  const cardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "12px",
    borderRadius: "16px",
    display: "none",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  };

  const imgStyle = {
    borderRadius: "8px",
    aspectRatio: "1.25",
    width: "100%",
    objectFit: "cover",
    marginBottom: "16px",
  };

  return (
    <div style={cardStyle}>
      <div>
        <img src={char.img} alt={char.name} style={imgStyle} />
      </div>
      <div>{char.name}</div>
      <div>{char.gender}</div>
      <div>{char.status}</div>
    </div>
  );
};

export default CharacterCard;
