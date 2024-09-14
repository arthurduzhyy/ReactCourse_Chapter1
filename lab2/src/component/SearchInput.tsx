import { ChangeEvent, FC, useState } from 'react'

interface SearchInputProps {
  onSearch: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return <input
    className="search-input"
    value={query}
    onChange={handleSearch}
    placeholder="Search todos..."
  />
}

export default SearchInput