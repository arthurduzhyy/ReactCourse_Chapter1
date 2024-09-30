import { FC, ReactNode } from 'react'

const PageTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <h4>{children}</h4>
}

export default PageTitle