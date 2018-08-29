import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Sandwiches = () => <div>Sandwiches</div>;
const Cart = () => <div>Cart</div>;
const Bus = () => <div>Bus</div>;
const Tacos = ({ routes }) => (
  <div>
    Tacos
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
);
const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
];
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
      </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </Router>
);
export default RouteConfigExample;
