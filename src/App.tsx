import React from 'react';
import Tilt from 'react-parallax-tilt';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Typewriter from 'typewriter-effect';
import Terminal from './components/Terminal.tsx';



const App = () => {

  return (
    <div className="App">
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Tilt className="centred" perspective={10000}>
                  <Terminal>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString("welcome to my page!")
                          .callFunction(() => {
                            console.log("String typed out!");
                          })
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("scroll down to see my projects")
                          .start();
                      }}
                    />
                  </Terminal>
                </Tilt>
              </div>

              <div className="section">
                <h1 className="code">Projects</h1>
              </div>

              <div className="section">
                <h1 className="code"><a className="App-link" href="https://github.com/lillycat332/rosalia">Rosalia</a></h1>
                <p className="code">
                  Rosalia is my programming language I am currently making in Swift.<br />
                  It's a functional programming language with influence from Haskell and Swift.
                </p>
              </div>

              <div className="section">
                <h1 className="code"><a className="App-link" href="https://github.com/lillycat332/hs-pos">hs-pos</a></h1>
                <p className="code">
                  hs-pos is the backend to my final school project for CS.<br />
                  It's a simple point-of-sale system with SQLite and Haskell.
                </p>
              </div>

              <div className="section">
                <h1 className="code"><a className="App-link" href="https://github.com/lillycat332/react-pos">react-pos</a></h1>
                <p className="code" >
                  react-pos is the frontend to the aforementioned point of sale project,<br />
                  written in React TypeScript.
                </p>
              </div>

              <div className="section">
                <h1 className="code"><a className="App-link" href="https://github.com/lillycat332/NitrogenApp">Nitrogen</a></h1>
                <p className="code">
                  Nitrogen is an iOS specs viewer written in Swift.
                </p>
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div >
  );
};

export default App;
