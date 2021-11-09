
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Photos } from './components/Photos/Photos';
import { Home } from './components/Home/Home';

function App() {
  return (
    
      <Switch>
        <Route path="/photos" component={Photos}/>
        <Route path='/' component={Home}/>
      </Switch>
    
  );
}

export default App;
