import React from 'react';
import {
  BrowseRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../pages/CharacterPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterPage} />
      </Switch>
    </Router>
  );
}

//return <CharacterList />;
