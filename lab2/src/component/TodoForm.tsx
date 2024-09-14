import { FC, FormEvent, useState } from 'react'
import { Todo } from '../type/todo'

interface TodoFormProps {
  onSave: (todo: Todo) => void
  initialTodo?: Todo
}

const TodoForm: FC<TodoFormProps> = ({ onSave, initialTodo }) => {
  const [value, setValue] = useState<string>(initialTodo?.title || '')

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