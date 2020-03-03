import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App" id="app" >
      <ul className="ul">
       <li className="li"><Link to='/'>Home</Link></li>
       <li className="li"><Link to='/about'>About</Link></li>
       <li className="li"><Link to='/contact'>Contact</Link></li>
       <li className="li"><Link to='/message'>Message</Link></li>
     </ul>
    </div>
  );
}

export default App;
