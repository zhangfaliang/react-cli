import React from 'react';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';

// const branch = matchRoutes(routes, '/child/23');
// console.log();

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);
export const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild
          }
        ]
      }
    ]
  }
];
