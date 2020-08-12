import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import FasterApp from './Faster_Game/FasterApp';
import Menu from './Home/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      {/* 위의 exact는 정확히 입력해야함을 뜻함. /같은경우 모두 사용되므로 밴 */}
      <Route path="/speed" component={FasterApp}/>
    </div>
  );
}

export default App;
