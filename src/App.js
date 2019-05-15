import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Index';
import About from './components/About/Index';
import UserDetail from './components/UserDetail/Index';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="users/:userId" component={UserDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
