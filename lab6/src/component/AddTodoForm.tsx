import classNames from 'classnames'
import { ChangeEvent, FormEvent, useState } from 'react'
import useTodo, { TodoType } from '../hook/useTodo'

const AddTodoForm = () => {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { addTodo } = useTodo()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = title.trim()
    if (trimmed === '') {
      setError('Title is required')
      return
    }

    if (trimmed.length > 20) {
      setError('Title should be less than 20 characters')
      return
    }

    const newTodo: TodoType = { id: Date.now(), title, completed: false }

    addTodo(newTodo)
    setTitle('')
    setError('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    if (error) {
      setError('')
    }
  }

  const isValid = !error && title.trim().length > 0

  return <>
    <form className="mt-4" onSubmit={onSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className={classNames('form-control', { 'is-invalid': error, 'is-valid': isValid })}
          value={title}
          onChange={handleChange}
          placeholder="Enter new Todo"
          aria-label="Todo Text"
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  </>
}

export default AddTodoForm