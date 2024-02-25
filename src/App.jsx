import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Context from './Components/dataStore/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Context>
        <Header />
        <Hero />
      </Context>
    </>
  );
}

export default App
