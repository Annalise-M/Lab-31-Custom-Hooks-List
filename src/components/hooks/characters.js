import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);
  
  return {
    loading,
    characters
  };
};
