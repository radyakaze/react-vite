import { FC } from 'react'
import './style.scss'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'reset' | 'submit'
  [key: string]: unknown
}

const Button: FC<ButtonProps> = ({ variant, children, className, type, ...otherProps }) => (
  <button
    className={`btn btn-${variant || 'primary'} ${className || ''}`}
    type={type || 'button'}
    {...otherProps}
  >
    {children}
  </button>
)

export default Button
