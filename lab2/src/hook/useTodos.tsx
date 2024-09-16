import { useEffect, useState } from 'react'
import { Todo } from '../type/todo'

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const load = () => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos)
        setTodos(parsedTodos)
      } catch (e) {
        console.error('failed to parse todos from local storage: ', e)
        localStorage.removeItem('todos')
      }
    } else {
      const fetchTodos = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
          const body = await response.json()
          setTodos(body)
          localStorage.setItem('todos', JSON.stringify(body))
        } catch (e) {
          console.error('failed to fetch todos: ', e)
        }
      }

      fetchTodos()
    }
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  return [todos, setTodos] as const
}

export default useTodos