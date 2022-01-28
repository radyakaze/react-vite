import React, { FC } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import './style.scss'

interface AppHeaderProps {
  hamburgerActive: boolean
  onHamburgerClick: () => void
}

const AppHeader: FC<AppHeaderProps> = ({
  hamburgerActive,
  onHamburgerClick,
}) => (
  <header className="app-header">
    <div className="brand">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl">
          <span className="text-white">Social</span>
          <span className="text-secondary">Network</span>
        </h1>
        <div
          className="hamburger-menu text-secondary p-1"
          onClick={onHamburgerClick}
        >
          {hamburgerActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
    <div className="right">
      <TextInput
        className="global-search"
        type="search"
        placeholder="Find..."
      />
      <div>
        <Button
          variant="secondary"
          className="flex items-center"
          aria-label="Upload"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span className="ml-2 hidden lg:inline-block">Upload</span>
        </Button>
      </div>
      <div className="flex items-center ml-2 lg:ml-0">
        <Button variant="secondary" aria-label="User">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Button>
        <div className="hidden lg:inline-block ml-2">
          <div className="text-sm text-secondary">Waseem</div>
          <div className="text-xs text-secondary">Arshad</div>
        </div>
      </div>
    </div>
  </header>
)

export default AppHeader
