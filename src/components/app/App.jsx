import React from 'react';
import {
  BrowseRouter as Router,
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
          <Route exact path="/characters/:id" component={CharacterDetailPage} />
        </Switch>
      </Router>
    </>
  );
}

{/* <Link to="/">Character List</Link>
<Link to="/characters">Character Details</Link> */}

