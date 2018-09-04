import Loadable from 'react-loadable';
import Root from '../components/Root.js';
const Loading = () => 'loading';
export const route = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Loadable({
          loader: () => import('../components/Home.js'),
          loading: Loading
        })
      },
      {
        path: '/child/:id',
        component: Loadable({
          loader: () => import('../components/Child.js'),
          loading: Loading
        }),
        routes: [
          {
            path: '/child/:id/grand-child',
            component: Loadable({
              loader: () => import('../components/GrandChild.js'),
              loading: Loading
            })
          }
        ]
      }
    ]
  }
];
