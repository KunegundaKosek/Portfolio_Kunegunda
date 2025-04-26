import Header from './components/Header/Header';
import classes from './App.module.scss';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className={classes.app}>
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
