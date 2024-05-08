import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../../../constants/styling/constants';
import {useNavigation} from '@react-navigation/native';
import {
  LIST_SCREEN,
  TASKS_SCREEN,
} from '../../../../screens/components/HomeStack/constants/screens';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const onPress = route => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress(LIST_SCREEN)}
        style={styles.button}>
        <Text style={styles.buttonText}>Listas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress(TASKS_SCREEN)}
        style={styles.button}>
        <Text style={styles.buttonText}>Tareas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
