import React, { FC, useState } from 'react'
import AppFooter from './AppFooter/AppFooter'
import AppHeader from './AppHeader/AppHeader'
import AppMenu from './AppMenu/AppMenu'

const Layout: FC = ({ children }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false)

  const onHamburgerClick = () => {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <div className="mx-3 lg:mx-auto max-w-screen-lg">
      <AppHeader hamburgerActive={hamburgerMenu} onHamburgerClick={onHamburgerClick} />
      <AppMenu active={hamburgerMenu} />
      {children}
      <AppFooter />
    </div>
  )
}

export default Layout
