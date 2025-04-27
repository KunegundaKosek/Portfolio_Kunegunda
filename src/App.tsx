import Header from './components/Header/Header';
import classes from './App.module.scss';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className={classes.app}>
      <Header />

      <main>
        <Hero />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}

export default App;
