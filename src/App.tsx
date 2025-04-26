import Header from './components/Header/Header';
import classes from './App.module.scss';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className={classes.app}>
      <Header />

      <main>
        <Hero />
        <Technologies />
      </main>
    </div>
  );
}

export default App;
