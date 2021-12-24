import { DEFAULT_PATHS, MENU_PATHS } from 'config.js';

import HorizontalPage from 'views/Horizontal';
import VerticalPage from 'views/Vertical';
import ManageUsers from 'views/users/users'

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/users`,
    },
    {
      path: `${appRoot}/users`,
      component: ManageUsers,
      label: 'menu.users',
      icon: 'grid-2',
    },
    {
      path: `${appRoot}/vertical`,
      label: 'menu.vertical',
      icon: 'grid-3',
      component: VerticalPage
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
