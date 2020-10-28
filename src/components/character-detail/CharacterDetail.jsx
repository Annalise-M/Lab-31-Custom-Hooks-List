import React from 'react';
import { useCharacterById } from '../hooks/characters';

const CharacterDetail = () => {
  // have loading
  const { loading, character } = useCharacterById();
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <img src={character.imageUrl} alt={character.name} />
    </>
  );
};

export default CharacterDetail;
