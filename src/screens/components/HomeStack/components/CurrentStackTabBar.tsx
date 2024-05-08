import {View, Text, TouchableOpacity} from 'react-native';
import {TASKS_SCREEN, LIST_SCREEN, HOME_SCREEN} from '../constants/screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/CurrentStackTabBarStyles';

interface CurrentStackTabBar {
  state: any;
  descriptors: any;
  navigation: any;
}

function CurrentStackTabBar({
  state,
  descriptors,
  navigation,
}: CurrentStackTabBar) {
  const currentLabels = {
    [LIST_SCREEN]: 'Lista',
    [HOME_SCREEN]: 'Inicio',
    [TASKS_SCREEN]: 'Tareas',
  };

  const currentIcons = {
    [LIST_SCREEN]: {
      filled: 'account-group',
      outline: 'account-group-outline',
    },
    [HOME_SCREEN]: {
      filled: 'home-circle',
      outline: 'home-circle-outline',
    },
    [TASKS_SCREEN]: {
      filled: 'clipboard-list',
      outline: 'clipboard-list-outline',
    },
  };

  return (
    <>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
              key={index}>
              <Icon
                name={
                  isFocused
                    ? currentIcons[route.name as keyof typeof currentIcons]
                        .filled
                    : currentIcons[route.name as keyof typeof currentIcons]
                        .outline
                }
                style={isFocused ? styles.selectedIcon : styles.icon}
              />
              <Text style={isFocused ? styles.selectedText : styles.text}>
                {currentLabels[route.name as keyof typeof currentLabels]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

export default CurrentStackTabBar;
