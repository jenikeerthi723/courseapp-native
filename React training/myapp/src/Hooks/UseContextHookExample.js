import React, { useContext, useState } from 'react'

const Theme = React.createContext()

const UseContextHookExample = () => {
  const [theme, setTheme] = useState('Light')

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <Theme.Provider value={theme}>
      <ChildComponent />
      <button onClick={toggleTheme}>Change Theme</button>
    </Theme.Provider>
  )
}

const ChildComponent = () => {
  return (
    <div>
      <ChildComponentB />
    </div>
  )
}

const ChildComponentB = () => {
  const theme = useContext(Theme)

  return (
    <h1>
      current theme is {theme}.
      </h1>
    )
}

export default UseContextHookExample;