import React from 'react';
// import PropTypes from 'prop-types';
import { useCharacters } from '../hooks/characters';
import CharacterItem from '../characters/CharacterItem';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));
  
  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {

};

export default CharacterList;
