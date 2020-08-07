import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieInfos from './components/MovieInfos';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movie/:id" component={MovieInfos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
