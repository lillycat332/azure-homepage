import React from 'react';
import Tilt from 'react-parallax-tilt';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Typewriter from 'typewriter-effect';
import Terminal from './components/Terminal';
import 'rsuite/dist/rsuite.min.css';
import { light } from 'ayu';

const linkStyle: React.CSSProperties = {
  color: light.syntax.tag.hex()
}

const App = () => {
  return (
    <div className="App">
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000}
        scrollBar={false}
        easing={"easeInOutElastic"}
        navigation={true}
        css3={true}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section top">
                <Tilt className="centred" perspective={10000} gyroscope={true}>
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
                      }} />
                  </Terminal>
                </Tilt>
              </div>

              <div className="section projects">
                <h1 className="code">Projects</h1>
              </div>

              <div className="section rosalia">
                <div className="text-in-div">
                  <h1 className="code"><a style={linkStyle} href="https://github.com/lillycat332/rosalia">Rosalia</a></h1>
                  <p className="code">
                    Rosalia is my programming language I am currently making in Swift.
                    It's a functional programming language with influence from Haskell and Swift.
                  </p>
                </div>
              </div>

              <div className="section hspos">
                <div className="text-in-div">
                  <h1 className="code"><a style={linkStyle} className="App-link" href="https://github.com/lillycat332/hs-pos">hs-pos</a></h1>
                  <p className="code text-in-div">
                    hs-pos is the backend to my final school project for CS.
                    It's a simple point-of-sale system with SQLite and Haskell.
                  </p>
                </div>
              </div>

              <div className="section reactpos">
                <div className="text-in-div">
                  <h1 className="code"><a style={linkStyle} className="App-link" href="https://github.com/lillycat332/react-pos">react-pos</a></h1>
                  <p className="code">
                    react-pos is the frontend to the aforementioned point of sale project,
                    written in React TypeScript.
                  </p>
                </div>
              </div>

              <div className="section nitrogen">
                <div className="text-in-div">
                  <h1 className="code"><a style={linkStyle} className="App-link" href="https://github.com/lillycat332/NitrogenApp">Nitrogen</a></h1>
                  <p className="code">
                    Nitrogen is an iOS specs viewer written in Swift.
                  </p>
                </div>
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div >
  );
};

export default App;
