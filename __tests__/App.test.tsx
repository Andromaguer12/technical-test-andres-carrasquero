import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CardItem from '../src/components/screensComponents/HomeStack/ListPage/components/Card';
import TasksPage from '../src/components/screensComponents/HomeStack/TasksPage/TasksPage';
import {Provider} from 'react-redux';
import testStore from './testStore';

describe('CardItem', () => {
  it('renders correctly with provided props', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const avatarUrl =
      'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg';
    const {getByText} = render(
      <CardItem
        title={title}
        description={description}
        avatarUrl={avatarUrl}
      />,
    );

    const titleElement = getByText(title);
    const descriptionElement = getByText(description);
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it('renders with default avatar image if no avatarUrl is provided', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const {getByTestId} = render(
      <CardItem title={title} description={description} avatarUrl="" />,
    );

    const defaultAvatarImage = getByTestId('default-avatar-image');

    expect(defaultAvatarImage).toBeTruthy();
    expect(defaultAvatarImage.props.source.uri).toBe(
      'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    );
  });
});

describe('TasksPage Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={testStore}>
        <TasksPage />
      </Provider>,
    );
  });

  it('renders the correct title', () => {
    const {getByText} = render(
      <Provider store={testStore}>
        <TasksPage />
      </Provider>,
    );
    const titleElement = getByText('Tareas');
    expect(titleElement).toBeTruthy();
  });

  it('opens the modal when "Agregar Tarea" button is pressed', () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={testStore}>
        <TasksPage />
      </Provider>,
    );
    const addButton = getByText('Agregar Tarea');
    fireEvent.press(addButton);
    const modalTitle = getByText('Nueva Tarea');
    expect(modalTitle).toBeTruthy();
    const input = getByPlaceholderText('Ingrese la descripción de la tarea');
    expect(input).toBeTruthy();
  });

  it('adds a task when "Agregar" button in modal is pressed', () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={testStore}>
        <TasksPage />
      </Provider>,
    );
    const addButton = getByText('Agregar Tarea');
    fireEvent.press(addButton);
    const input = getByPlaceholderText('Ingrese la descripción de la tarea');
    fireEvent.changeText(input, 'Nueva tarea de prueba');
    const agregarButton = getByText('Agregar');
    fireEvent.press(agregarButton);
    const newTask = getByText('Nueva tarea de prueba');
    expect(newTask).toBeTruthy();
  });
});
