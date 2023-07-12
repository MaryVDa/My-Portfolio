import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='about'>
        <h1>About Me</h1>
      </section>
      <section id='portfolio'>
        <h1>Portfolio</h1>
      </section>
      <section id='contact'>
        <h1>Contact Me</h1>
      </section>
      <section id='resume'>
        <h1>Resume</h1>
      </section>
    </div>
  );
}

export default App;
