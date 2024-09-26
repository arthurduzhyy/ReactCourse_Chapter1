import { FC, ReactNode } from 'react'

interface LoadingProps {
  loading: boolean
  children?: ReactNode
}

function Spinner() {
  return <div className="clip-loader"></div>
}

const Loading: FC<LoadingProps> = ({ loading, children }) => {
  return <div className="loading-container">
    {loading ? <Spinner /> : children}
  </div>
}

export default Loading