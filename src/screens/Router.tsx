import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_STACK, stacks} from './constants/stacks';

// this will contain the firts view about the app
// it will be the login page, register page, and then will show the main page

const Tabs = createNativeStackNavigator();

export default function Router() {
  const LoggedStackComp = () => {
    return (
      <Tabs.Navigator initialRouteName={HOME_STACK}>
        {stacks
          .filter(screen => screen.private)
          .map(screen => {
            return (
              <Tabs.Screen
                key={screen.name}
                options={screen.options}
                name={screen.name}
                component={screen.component}
              />
            );
          })}
      </Tabs.Navigator>
    );
  };

  return (
    <>
      <LoggedStackComp />
    </>
  );
}
