
import './App.css';
import HomeTemplate from './Templates/HomeTemplate';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomePage } from './pages/HomePage/HomePage';




export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
