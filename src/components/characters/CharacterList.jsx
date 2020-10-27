import React from 'react';
// import PropTypes from 'prop-types';
import { useCharacters } from '../hooks/characters';

const CharacterList = () => {
  const { loading } = useCharacters();
  if(loading) return <h1>Loading...</h1>;
};

CharacterList.propTypes = {

};

export default CharacterList;
