import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import FasterApp from './Faster_Game/FasterApp';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/speed" component={FasterApp}/>
    </div>
  );
}

export default App;
