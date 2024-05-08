/* eslint-disable prettier/prettier */
import React from 'react';
import {HOME_SCREEN, screens} from './constants/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentStackTabBar from './components/CurrentStackTabBar';

const Tab = createBottomTabNavigator();

function withLayout(
  Component: React.JSX.IntrinsicAttributes,
  CurrentLayout: React.ExoticComponent<{children?: React.ReactNode}>,
) {
  return function WrappedComponent(props: React.JSX.IntrinsicAttributes) {
    const Layout = CurrentLayout ?? React.Fragment;
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      tabBar={props => <CurrentStackTabBar {...props} />}>
      {screens.map(Screen => {
        const Component = withLayout(Screen.component, Screen.dashboard);

        return (
          <Tab.Screen
            key={Screen.name}
            options={Screen.options}
            name={Screen.name}
            component={Component}
          />
        );
      })}
    </Tab.Navigator>
  );
}
