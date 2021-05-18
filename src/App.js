import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import CharacterDetails from './Components/CharacterDetails/CharacterDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/character/:id'>
          <CharacterDetails />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
