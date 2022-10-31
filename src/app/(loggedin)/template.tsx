import React, {ReactNode} from 'react'

interface ITemplate {
  children: ReactNode
}

const Template = ({ children }: ITemplate) => {
  return (
    <div>
      <h3>Logged in Tempalte</h3>
      {children}
    </div>
  )
}

export default Template
