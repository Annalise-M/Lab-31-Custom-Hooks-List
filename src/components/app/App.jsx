import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import CharacterPage from '../../pages/CharacterPage';


// eslint-disable-next-line max-len
// think about creating a function and calling it for the Header <Link to> section...
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterPage} />
  eslint-disable-next-line max-len
          <Route exact path="/character/:id" component={CharacterDetailPage} />
        </Switch>
      </Router>
    </>
  );
}

