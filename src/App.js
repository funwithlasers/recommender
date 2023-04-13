import "./App.css";
import "./Components/Category";
import Category from "./Components/Category";
import { Recommendation } from "./Components/Recommendation";
import TheLibraryAtMountChar from "./images/the-library-at-mount-char.jpg";
import IAmPilgrim from "./images/i-am-pilgrim.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        {/*
          <Category title="Books"></Category>
          <Category title="TV"></Category>
        */}
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <Recommendation
                  title="The Library at Mount Char"
                  author="Scott Hawkins"
                  image={TheLibraryAtMountChar}
                ></Recommendation>
              </div>
              <div className="column is-4">
                <Recommendation
                  title="I Am Pilgrim"
                  author="Terry Hayes"
                  image={IAmPilgrim}
                ></Recommendation>
              </div>
              <div className="column is-4">
                <Recommendation
                  title="I Forgot"
                  author="Someone"
                ></Recommendation>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
