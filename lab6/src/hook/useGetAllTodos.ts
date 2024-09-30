import { useEffect, useState } from 'react'
import useTodo from './useTodo'

const useGetAllTodos = () => {
  const { setTodos } = useTodo()
  const [loading, setLoading] = useState<boolean>(false)

  const load = () => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(r => r.json())
      .then(json => setTodos(json))
      .catch(e => console.error('error fetching todos: ', e))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  return { loading }
}

export default useGetAllTodos