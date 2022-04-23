import React from 'react'
import { ReactNode } from 'react'
import Header from './Header'

type LayoutProp = {
    children: ReactNode
    HeaderTitle: string
}

function Layout({children, HeaderTitle}:LayoutProp) {
  return (
    <div>
        <Header title={HeaderTitle}/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout