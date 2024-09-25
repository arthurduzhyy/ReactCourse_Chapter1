export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface TodoFuncsProps {
  onEdit: (todo: Todo) => void
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}