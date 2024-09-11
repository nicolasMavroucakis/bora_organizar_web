import { useState } from 'react'
import './App.css'
import SignInSignUp from './Pages/signIn_signUp/signIn_signUp'
import YourTravels from './Pages/Your_travels/Your_Travels';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from './context/context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
            <Route path="/" element={<SignInSignUp />} />
            <Route path="/your-travels" element={<YourTravels />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  )
}

export default App
