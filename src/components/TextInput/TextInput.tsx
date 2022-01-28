import React, { FC } from 'react'
import './style.scss'

interface TextInputProps {
  id?: string
  placeholder?: string
  type?: 'text' | 'number' | 'password' | 'search'
  className?: string
}

const TextInput: FC<TextInputProps> = ({
  id,
  placeholder,
  type,
  className,
  ...otherProps
}) => (
  <input
    className={`text-input-component ${className}`}
    id={id}
    placeholder={placeholder}
    type={type || 'text'}
    {...otherProps}
  />
)

export default TextInput
