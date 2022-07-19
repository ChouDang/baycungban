
import './App.css';
import HomeTemplate from './Templates/HomeTemplate';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomePage } from './pages/HomePage/HomePage';
import { Lists } from './pages/Lists/Lists';




export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" component={HomePage} />
        <HomeTemplate exact path='/lists' component={Lists} />
      </Switch>
    </Router>
  );
}

export default App;
