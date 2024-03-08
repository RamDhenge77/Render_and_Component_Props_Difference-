import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" Component={Home} />

          {/* Here we cannot pass the props directly */}
          <Route path="/about" Component={About} />

          {/* to send component props needs to write inline function */}
          <Route path="/contact" Component={() => <Contact name="Contact" />} />

          {/* using component prop the whole component get created after every render,
              to render the component only if props get changed the use render prop  */}
          <Route path="/services" render={() => <Services name="Services" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
