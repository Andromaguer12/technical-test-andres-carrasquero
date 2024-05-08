/* eslint-disable prettier/prettier */

import HomeStack from '../components/HomeStack/HomeStack';
export const HOME_STACK = 'HOME_STACK';

export const stacks = [
  {
    options: { headerShown: false },
    name: HOME_STACK,
    component: HomeStack,
    private: true,
  },
];
