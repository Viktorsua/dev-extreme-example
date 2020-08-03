import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, ToDoList, DisplayDataPage, ProfilePage } from './pages';

const routes = [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/todo-list',
    component: ToDoList,
  },
  {
    path: '/display-data',
    component: DisplayDataPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
