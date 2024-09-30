import useGetAllTodos from '../hook/useGetAllTodos'
import AddTodoForm from './AddTodoForm'
import Loading from './Loading'
import SearchInput from './SearchInput'
import TodoList from './TodoList'

const TodoApp = () => {
  const { loading } = useGetAllTodos()

  return <>
    <SearchInput />

    <AddTodoForm />

    <Loading loading={loading}>
      <TodoList />
    </Loading>
  </>
}

export default TodoApp