# Task Management App with Redux

This is a simple task management application built using React and Redux for state management. The app allows users to add and delete tasks. Redux is used to manage the application state, including the task list and task actions.

## Features
- Add tasks to the task list.
- Delete tasks from the list.
- Redux for global state management.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps, used to manage the state of the app.
- **React-Redux**: Official React bindings for Redux.
- **CSS**: For basic styling.

## Installation and Setup

1. Navigate to the project folder:
    ```bash
    cd task-management-redux
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

    This will start the development server, and you can access the app at [http://localhost:3000](http://localhost:3000).

## Actions

The application uses Redux actions to perform tasks like adding and deleting tasks. The actions are dispatched from the components to trigger state changes.

- **addTask(task)** – Adds a new task to the list.
- **deleteTask(id)** – Deletes a task from the list.

## Reducers

The reducers define how the state should change in response to the dispatched actions.

- **taskReducer** – Handles the task-related actions (add, delete) and updates the global task state.

## Store

The Redux store combines all reducers and holds the global state. It is configured in `store.js`.

## Usage

- **Adding a task**: You can add a task by typing the task description in the input box and clicking "Add Task."
- **Deleting a task**: Click on the "Delete" button next to the task you want to remove.
