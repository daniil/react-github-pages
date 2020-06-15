import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <h1>Home Page</h1>
  )
}

const About = () => {
  return (
    <h1>About Page</h1>
  )
}

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
