import classNames from 'classnames'
import { ChangeEvent, FC, useState } from 'react'
import useTodo, { TodoType } from '../hook/useTodo'

interface TodoItemProps {
  todo: TodoType
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)
  const [error, setError] = useState('')

  const { deleteTodo, updateTodo, toggleTodo } = useTodo()

  const handleEditClick = () => {
    if (isEditing) {
      const trimmed = editedTitle.trim()
      if (trimmed === '') {
        setError('Title is required')
        return
      }

      if (trimmed.length > 20) {
        setError('Title should be less than 20 characters')
        return
      }

      updateTodo(todo.id, trimmed)
      setEditedTitle('')
      setError('')
    }
    setIsEditing(!isEditing)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value)
    if (error) {
      setError('')
    }
  }

  return <li className="list-group-item d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      {isEditing ? <>
        <input
          className={classNames('form-control me-2', { 'is-invalid': error })}
          value={editedTitle}
          onChange={handleChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </> : <>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          className={classNames('me-3', {
            'text-decoration-line-through': todo.completed
          })}
        >{todo.title}</span>
      </>}
    </div>

    <div className="btn-group">
      <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>Remove</button>
      <button className="btn btn-sm btn-warning" onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  </li>
}

export default TodoItem