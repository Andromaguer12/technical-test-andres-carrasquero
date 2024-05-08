import React, {useEffect, useState} from 'react';
import {View, Text, Button, Modal, FlatList, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../../services/redux/store';
import styles from './styles/tasksPageStyles';
import {
  Task,
  addTask,
} from '../../../../services/redux/reducers/tasksPage/actions/tasksActions';
import TaskItem from './components/TaskItem';

const TasksPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([{} as Task]);
  const [taskTitle, setTaskTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      setError('Por favor, ingrese una descripción para la tarea.');
      return;
    }

    const newTask: Task = {
      id: Math.random(),
      description: taskTitle,
    };
    dispatch(addTask(newTask));
    setShowModal(false);
    setTaskTitle('');
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Tareas</Text>
      <Button title="Agregar Tarea" onPress={() => setShowModal(true)} />

      {taskList.length > 0 ? (
        <FlatList
          data={taskList}
          renderItem={({item}) => (
            <TaskItem key={item.id} description={item.description} />
          )}
          keyExtractor={item => item.id + '1'}
        />
      ) : (
        <View style={styles.pageTitle}>
          <Text>Sin tareas</Text>
        </View>
      )}

      <Modal
        visible={showModal}
        style={styles.modal}
        animationType="fade"
        transparent>
        <View style={styles.modalContent}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>Nueva Tarea</Text>
            <TextInput
              placeholder="Ingrese la descripción de la tarea"
              value={taskTitle}
              onChangeText={text => setTaskTitle(text)}
              style={styles.textInput}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <View style={styles.modalButtons}>
              <Button
                title="Cancelar"
                onPress={() => {
                  setShowModal(false);
                  setTaskTitle('');
                  setError('');
                }}
              />
              <Button title="Agregar" onPress={handleAddTask} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TasksPage;
