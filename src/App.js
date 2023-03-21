import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details" element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
