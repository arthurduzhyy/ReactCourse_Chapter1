import { useState } from 'react'
import useGetData from '../hook/useGetData'
import { Todo } from '../type/todo'
import Loading from './Loading'
import SearchInput from './SearchInput'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const [editableTodo, setEditableTodo] = useState<Todo | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { data, setData, loading } = useGetData<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')

  const handleAdd = (todo: Todo) => {
    setData(prev => prev ? [todo, ...prev] : [todo])
  }

  const handleEdit = (todo: Todo) => {
    setData(prev => prev ? prev.map(t => t.id === todo.id ? todo : t) : null)
  }

  const handleDelete = (id: number) => {
    setData(prev => prev ? prev.filter(t => t.id !== id) : [])
  }

  const handleToggle = (id: number) => {
    setData(prev => prev ? prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ) : [])
  }

  const onSave = (todo: Todo) => {
    if (editableTodo) {
      handleEdit(todo)
      setEditableTodo(null)
    } else {
      handleAdd(todo)
    }
  }

  const onEdit = (todo: Todo) => {
    setEditableTodo(todo)
  }

  const filteredTodos = data?.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())) || []

  return <div>
    <SearchInput query={searchQuery} onSearch={setSearchQuery} />

    <TodoForm onSave={onSave} initialTodo={editableTodo} />

    <Loading loading={loading}>
      <TodoList
        todos={filteredTodos}
        onEdit={onEdit}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </Loading>
  </div>
}

export default TodoApp