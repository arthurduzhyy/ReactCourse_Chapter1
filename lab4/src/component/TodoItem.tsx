import { FC } from 'react'
import { Todo, TodoFuncsProps } from '../type/todo'

interface TodoItemProps extends TodoFuncsProps {
  todo: Todo
}

const TodoItem: FC<TodoItemProps> = ({ todo, onEdit, onDelete, onToggle }) => {
  return <li className="todo-item">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span>{todo.title}</span>
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  </li>
}

export default TodoItem