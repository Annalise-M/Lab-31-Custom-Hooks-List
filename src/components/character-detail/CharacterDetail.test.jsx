import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../services/rickAndMortyApi.js';

jest.mock('../services/rickAndMortyApi.js');

describe('CharacterDetail componenet', () => {
  it('display a character after loading', () => {
    getCharacterById.mockResolvedValue({
      id: 2,
      name: 'Morty',
      status: 'Alive',
      gender: 'Male',
      species: 'Human',
      imageUrl: 'morty.png'
    });
    render(
      <MemoryRouter>
        <CharacterDetail />
      </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Morty');
      screen.getByText('Alive');
      screen.getByText('Male');
      screen.getByText('Human');
      screen.getByAltText('Morty');
    });

  });
});
