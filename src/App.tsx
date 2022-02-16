import React, { useEffect, useState } from "react";

import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { getCharacters, getNext, getPrev } from "./redux/charactersSlice";
import Axios from "axios";
import SingleCharacter from "./components/singleCharacter/SingleCharacter";
import CharacterInformation from "./components/characterInformation/CharacterInformation";

// https://rickandmortyapi.com/api/character/

function App() {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characterSlice.characters
  );
  const [showModal, setShowModal] = useState(false);
  const [singleCharacter, setSingleCharacter] = useState();

  const loadCharacters = async () => {
    const response = await Axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    let loadedCharacters = response.data.results;
    let next = response.data.info.next;
    let prev = response.data.info.prev;
    dispatch(getCharacters(loadedCharacters));
    dispatch(getNext(next));
    dispatch(getPrev(prev));
  };
  const getCharacterById = async (id: number) => {
    const response = await Axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.status === 200) {
      setSingleCharacter(response.data);
      setShowModal(true);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <div className="App__content">
        {characters.map((character: any) => {
          return (
            <SingleCharacter
              key={character.id}
              character={character}
              showChar={getCharacterById}
            />
          );
        })}
        {showModal && (
          <div className="modal">
            <div className="modal__content">
              <CharacterInformation singleCharacter={singleCharacter} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
