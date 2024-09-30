import { FC } from 'react'
import useTodo from '../hook/useTodo'
import TodoItem from './TodoItem'

const TodoList: FC = () => {
  const { todos, search } = useTodo()

  const filteredTodos = todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))

  return <ul className="list-group mt-4">
    {filteredTodos.map(todo => <TodoItem
      key={todo.id}
      todo={todo}
    />)}
  </ul>
}

export default TodoList