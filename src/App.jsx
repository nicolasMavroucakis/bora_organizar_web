import { useState } from 'react'
import './App.css'
import SignInSignUp from './Pages/signIn_signUp/signIn_signUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignInSignUp/>
    </>
  )
}

export default App
