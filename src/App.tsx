import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Brightness4, Menu } from '@material-ui/icons'
import { IconButton, Switch as MUSwitch } from '@material-ui/core'

import Sidebar from './components/Sidebar'
import AboutPage from './pages/AboutPage'
import BlogsPage from './pages/BlogsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ResumePage from './pages/ResumePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const Main = () => {
  const router = createBrowserRouter([
    {
      path: '/portfolio',
      element: (
        <App>
          <HomePage />
        </App>
      ),
    },
    {
      path: '/about',
      element: (
        <App>
          <AboutPage />
        </App>
      ),
    },
    {
      path: '/works',
      element: (
        <App>
          <PortfolioPage />
        </App>
      ),
    },
    {
      path: '/blogs',
      element: (
        <App>
          <BlogsPage />
        </App>
      ),
    },
    {
      path: '/resume',
      element: (
        <App>
          <ResumePage />
        </App>
      ),
    },
    {
      path: '/contact',
      element: (
        <App>
          <ContactPage />
        </App>
      ),
    },
  ])
  return <RouterProvider router={router} />
}

type AppProps = {
  children: React.ReactNode
}

const App: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme')
  const [checked, setChecked] = useState(false)
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const themeToggler = () => {
    if (theme === 'lightTheme') {
      setTheme('darkTheme')
      setChecked(false)
    } else {
      setTheme('lightTheme')
      setChecked(true)
    }
  }

  return (
    <div className='App'>
      <Sidebar navToggle={navToggle} />
      <div className='theme'>
        <div className='lightDarkMode'>
          <div className='leftContent'>
            <Brightness4 />
          </div>
          <div className='rightContent'>
            <MUSwitch
              value=''
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size='medium'
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className='hamburgerMenu'>
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <Menu />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        {children}
      </MainContentStyled>
    </div>
  )
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`

export default App
