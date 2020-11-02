import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const PageNotFound = lazy(() => import('./pages/404'));

const App: React.FC = () => (
  <BrowserRouter>
    <h1>Welcome to react app</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
