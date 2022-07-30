import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Particles
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000"
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
    </div >
  );
};

export default App;
