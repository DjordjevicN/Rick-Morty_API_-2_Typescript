import * as React from "react";

interface SingleCharacterProps {
  singleCharacter?: {};
}

const CharacterInformation: React.FC<SingleCharacterProps> = (props) => {
  return (
    <>
      <div className="avatar">
        <img src="" alt="avatar" />
      </div>
      <div className="personalInformation">
        <div className="personalInformation__content">
          <h3>Personal information</h3>
          <p>
            <span>Full name: </span> rick
          </p>
          <p>
            <span>Gender: </span> rick
          </p>
          <p>
            <span>Species: </span> rick
          </p>
          <p>
            <span>Status: </span> rick
          </p>
          <p>
            <span>Origin: </span> rick
          </p>
          <p>
            <span>Location: </span> rick
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterInformation;
