import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Games from '@/Components/routes/Games/Games';
import Verbs from '@/Components/routes/Verbs/Verbs';
import Vocabulary from '@/Components/routes/Vocabulary/Vocabulary';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/Games",
        component: Games
    },
    {
        path: "/verbs",
        component: Verbs,
    },
    {
        path:"/vocabulary",
        component:Vocabulary
    },
  
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}