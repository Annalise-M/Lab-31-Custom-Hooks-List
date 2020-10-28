export const getCharacters = async(page = 1) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch from Api';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    status: character.status,
    imageUrl: character.image
  }));
};

export const getCharacterById = async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch this ONE CHARACTER DATA from api';

  return {
    id: json.id,
    name: json.name,
    status: json.status,
    gender: json.gender,
    species: json.species,
    imageUrl: json.image
  };
};
