import { useState } from 'react'
import User from './components/user/User'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-gray-100'>
      <User/>
   </div>
  )
}

export default App
