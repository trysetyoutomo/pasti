
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import TimbanganPage from '../pages/timbangan.f7';
import FormIbuHamil from '../pages/form-ibu-hamil.f7';
import CatalogPage from '../pages/catalog.f7';
import ProductPage from '../pages/product.f7';
import SettingsPage from '../pages/settings.f7';
import AlarmPage from '../pages/alarm.f7';
import Diskusi from '../pages/diskusi.f7';
import DiskusiDetail from '../pages/diskusidetail.f7';

import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

import Balita from '../pages/balita.f7';


var routes = [
  {
    path: '/timbangan/:id',
    component: TimbanganPage,
  },
  {
    path: '/hamil/:id',
    component: FormIbuHamil,
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/tracker/:id',
    component: Balita,
  },
  {
    path: '/diskusi/',
    component: Diskusi,
  },
  {
    path: '/diskusi/:id',
    component: DiskusiDetail,
  },
  {
    path: '/question/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/alarm/',
    component: AlarmPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;