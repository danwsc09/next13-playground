import React, {ReactNode} from 'react'

interface I {
  children: ReactNode
}
export default function DashboardSettingsLayout({children}: I) {
  return (
    <div>
      <h6>dashboard settings layout</h6>
      {children}
    </div>
  )
}
