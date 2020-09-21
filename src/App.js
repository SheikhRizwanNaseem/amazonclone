import React from 'react';
import './App.css';
import Header from './Header'
import Nav from "./Nav"
import Message from "./Message"
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Message></Message>
      <Home></Home>
    </div>
  );
}

export default App;
