import React from 'react';
import Proptypes from 'prop-types';

const CharacterItem = ({ name, status, imageUrl }) => (
  <figure>
    <img src={imageUrl} alt={name} />
    <figcaption>{name}</figcaption>
    <figcaption>{status}</figcaption>
  </figure>
);

CharacterItem.propTypes = {
  name: Proptypes.string.isRequired,
  status: Proptypes.string.isRequired,
  imageUrl: Proptypes.string.isRequired
};

export default CharacterItem;
