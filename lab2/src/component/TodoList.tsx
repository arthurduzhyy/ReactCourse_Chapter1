import { FC } from 'react'
import { Todo, TodoFuncsProps } from '../type/todo'
import TodoItem from './TodoItem'

interface TodoListProps extends TodoFuncsProps {
  todos: Todo[]
}

const TodoList: FC<TodoListProps> = ({ todos, onEdit, onDelete, onToggle }) => {
  return <>
    {todos.length > 0 ? <ul>
      {todos.map(t => <TodoItem
        key={t.id}
        todo={t}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
      />)}
    </ul> : <p>There are no records...</p>}
  </>
}

export default TodoList