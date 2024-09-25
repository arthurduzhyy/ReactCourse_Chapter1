import { FC, ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h4>{children}</h4>
}

export default PageTitle