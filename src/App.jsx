import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import BlogBody from './components/blogBody/BlogBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header></Header>
      <BlogBody></BlogBody>
    </div>
  )
}

export default App
