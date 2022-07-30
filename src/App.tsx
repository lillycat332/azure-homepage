import React from 'react';
import Tilt from 'react-parallax-tilt';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Typewriter from 'typewriter-effect';

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
                <Tilt>
                  <h1 className="code">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString("Hello World~")
                          .callFunction(() => {
                            console.log("String typed out!");
                          })
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("Welcome to my page!")
                          .start();
                      }}
                    />
                  </h1>
                </Tilt>
              </div>
              <div className="section">
                <h1 className="code">Projects</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
