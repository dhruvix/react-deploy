import React from 'react';
import './App.css';

function App() {

  function redirect(){
    alert("the port number of this site is:",window.location.port);
    alert("Most browsers will not display default port numbers (80 for http and 443 for https)")
  }

  return (
    <div className="App">
      <h1 onClick={redirect} >Get Schwifty !</h1>
    </div>
  );
}

export default App;
