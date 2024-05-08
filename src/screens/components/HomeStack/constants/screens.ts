/* eslint-disable prettier/prettier */
import TasksScreen from '../components/TasksScreen';
import ListScreen from '../components/ListScreen';
import LayoutComponent from '../components/LayoutComponent';
import HomeScreen from '../components/HomeScreen';

export const LIST_SCREEN = 'LIST_SCREEN';
export const TASKS_SCREEN = 'TASKS_SCREEN';
export const HOME_SCREEN = 'HOME_SCREEN'

export const screens = [
  {
    options: { headerShown: false },
    name: LIST_SCREEN,
    component: ListScreen,
    dashboard: LayoutComponent,
  },
  {
    options: { headerShown: false },
    name: HOME_SCREEN,
    component: HomeScreen,
    dashboard: LayoutComponent,
  },
  {
    options: { headerShown: false },
    name: TASKS_SCREEN,
    component: TasksScreen,
    dashboard: LayoutComponent,
  },
];
