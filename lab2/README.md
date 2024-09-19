# Lab 2

### Component tree thumbnail

![image](https://github.com/user-attachments/assets/20458390-9e41-4896-aaf2-fc5280dfa2e3)

# Lab 3

### Component tree thumbnail

![image](https://github.com/user-attachments/assets/aa1532f7-194f-4efd-b278-537b55f72411)

# Interaction of the components

### TodoApp

Affects:

- `SearchInput` -- passes the onSearch func that updates the searchQuery in the TodoApp.
- `TodoForm` -- passes onSave func and initialTodo that adds a new todo or edits an existing.
- `TodoList` -- passes a list of todos and funcs for working with todos.

Side effects:

Has a side effect on TodoForm and TodoList, as they depend on the state (todos and editableTodo) managed in TodoApp. These components cannot change the state of the task list on their own, but they receive updates after changes in TodoApp.

### SearchInput

Updates the search query by passing the changed value to the onSearch function, which changes the state of the searchQuery in TodoApp.

### TodoForm

Adds a new todo or edits an existing one by calling the onSave func, which changes the state of the todos in the TodoApp.

### TodoList

Displays a list of tasks and passes each task to the TodoItem.

### TodoItem

Calls functions for editing (onEdit), deleting (onDelete), and toggling the task state (onToggle), affecting the state of the task list in the TodoApp.
