export const getCharacters = async() => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch from api';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    status: character.status,
    imageUrl: character.image
  }));
};
