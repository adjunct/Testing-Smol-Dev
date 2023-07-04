# Starter React App

This is a starter React application built with the latest standards and TypeScript. It's a simple Todo application, which is a single page web application.
This is a todo application - a user should be able to manage his task list in this applcation. 

## Features

- Add new todo tasks
- Each todo task has a checkbox next to it on the left side
- Mark the task as done by checking the checkbox, the task will be striked through
- Delete a task completely via a 3 dot menu on the left side of each task

## Project Structure

The project is structured as follows:

- `src/App.tsx`: The main App component
- `src/index.tsx`: Entry point of the application
- `src/components/TodoList.tsx`: Component for displaying the list of todos
- `src/components/TodoItem.tsx`: Component for displaying a single todo item
- `src/components/AddTodoForm.tsx`: Component for adding new todos
- `src/components/ThreeDotMenu.tsx`: Component for the 3 dot menu for each todo item
- `src/types/todo.d.ts`: TypeScript type definitions for a todo
- `src/styles/`: Contains all the CSS styles for the components
- `public/`: Contains the static files like `index.html`, `favicon.ico`, and `manifest.json`
- `package.json`: Contains the project dependencies and scripts
- `tsconfig.json`: Contains the TypeScript configuration

## How to Run

1. Install the dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## How to Build

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `build/` directory.
