import React from "react";
import "./SingleCharacter.scss";

interface CharProps {
  character: {
    image: string;
    id: number;
  };
  showChar: (id: number) => void;
}

const SingleCharacter: React.FC<CharProps> = (props) => {
  return (
    <div
      className="character"
      onClick={props.showChar.bind(null, props.character.id)}
    >
      <div className="character__content">
        <img src={props.character.image} alt="character profile" />
      </div>
    </div>
  );
};
export default SingleCharacter;
