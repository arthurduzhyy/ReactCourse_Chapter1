import { FC, FormEvent, useEffect, useState } from 'react'
import { Todo } from '../type/todo'

interface TodoFormProps {
  onSave: (todo: Todo) => void
  initialTodo: Todo | null
}

const TodoForm: FC<TodoFormProps> = ({ onSave, initialTodo = null }) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (initialTodo) {
      setValue(initialTodo.title)
    }
  }, [initialTodo])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const todo: Todo = {
      id: initialTodo ? initialTodo.id : Date.now(),
      title: value.trim(),
      completed: initialTodo ? initialTodo.completed : false
    }

    onSave(todo)
    setValue('')
  }

  return <form onSubmit={onSubmit} className="todo-form">
    <input
      className="todo-input"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <button>{initialTodo ? 'Update' : 'Add'}</button>
  </form>
}

export default TodoForm