import React, { FC } from 'react'
import menus from './config.json'
import './style.scss'

interface AppMenuProps {
  active: boolean
}

const AppMenu: FC<AppMenuProps> = ({ active }) => (
  <nav className={`app-menu ${active ? 'active' : ''}`}>
    <ul>
      {menus.map((menu, index) => (
        <li key={`menu-${index}`}>
          <a href={menu.url}>{menu.name}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default AppMenu
