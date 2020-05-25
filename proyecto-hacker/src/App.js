import React from 'react';

import './App.scss';
import HackerControl from './Components/HackerControl';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link

  
}from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <Router>
          
          <Link to='/cameras'>CÁMARAS</Link>
        
          <Switch>
            
            <Route path='/cameras'><HackerControl></HackerControl></Route>
          </Switch>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
