import React, {ReactNode} from 'react'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <h3>You are logged in</h3>
      {children}
    </div>
  )
}

export default Layout
