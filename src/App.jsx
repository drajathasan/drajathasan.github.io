import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Contents'
import Tech from './components/Tech'
import './App.css'

function App() {
  let [section, setSection] = useState('tech');

  return (
    <div className="flex flex-row">
      <Sidebar changeContent={setSection}></Sidebar>
      <Home show={(section === 'content')}></Home>
      <Tech show={(section === 'tech')}></Tech>
    </div>
  )
}

export default App
