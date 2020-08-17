import React from 'react';
import profileImage from './img/lore-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <h2>Author: Lore Trujillo</h2>
      <img
        src={profileImage}
        alt="profile"
        className="Img-profile" />
    </div>
  );
}

export default App;
