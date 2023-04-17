//import './App.css';
import './Components/Category';
//import Category from './Components/Category';
import Recommendation from './Components/Recommendation';
import TheLibraryAtMountChar from './images/the-library-at-mount-char.png';
import IAmPilgrim from './images/i-am-pilgrim.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        {/*
          <Category title="Books"></Category>
          <Category title="TV"></Category>
        */}
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">
              Books
            </p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <Recommendation
                  title="The Library at Mount Char"                  author="Scott Hawkins"                  image={TheLibraryAtMountChar}
                  description="A missing God.
                  A library with the secrets to the universe. 
                  A woman too busy to notice her heart slipping away."                  publishDate="2016-3-15"                />
              </div>
              <div className="column is-4">
                <Recommendation
                  title="I Am Pilgrim"                  author="Terry Hayes"                  image={IAmPilgrim}
                  />
                  </div>
              <div className="column is-4">
                <Recommendation
                  title="Hide and Seek"                  author="Jack Ketchum"                  />
                  </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
