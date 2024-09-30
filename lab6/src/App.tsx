import Layout from './component/Layout'
import PageTitle from './component/PageTitle'
import TodoApp from './component/TodoApp'
import TodoProvider from './component/TodoProvider'

function App() {
  return <Layout>
    <PageTitle>Todo List</PageTitle>

    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </Layout>
}

export default App
