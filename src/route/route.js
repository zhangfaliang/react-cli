import Loadable from 'react-loadable';
import Root from '../App';
import MyComponentWithHoc from '../components/react-i18n/OverView';
import TranslateHOC from '../components/react-i18n/TranslateHOC';

const Loading = () => 'loading';

export const route = [
  {
    component: TranslateHOC,
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
