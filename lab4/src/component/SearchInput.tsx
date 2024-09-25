import { FC } from 'react'

interface SearchInputProps {
  query: string
  onSearch: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ query, onSearch }) => {
  return <input
    className="search-input"
    value={query}
    onChange={e => onSearch(e.target.value)}
    placeholder="Search todos..."
  />
}

export default SearchInput