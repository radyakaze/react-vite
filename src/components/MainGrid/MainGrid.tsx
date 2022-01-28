import { FC } from 'react'
import './style.scss'

interface MainGridProps {
  className?: string
}

const MainGrid: FC<MainGridProps> = ({ children, className }) => (
  <div className={`main-grid-component ${className}`}>{children}</div>
)

export default MainGrid
