import { FC } from 'react'
import useTodo from '../hook/useTodo'

const SearchInput: FC = () => {
  const { search, setSearch } = useTodo()

  return <input
    className="form-control mt-4"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search todos..."
  />
}

export default SearchInput