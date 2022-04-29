import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Contents'
import Tech from './components/Tech'
import Jobs from './components/Jobs'
import Contact from './components/Contact'
import './App.css'

function App() {
  let [section, setSection] = useState('content');

  function hook(e, section)
  {
    let activeClass = ['bg-gray-300','font-bold','text-gray-900'];

    document.querySelectorAll('.sidebarMenu').forEach(el => {
      el.classList.remove(...activeClass);
    });

    e.target.classList.add(...activeClass);

    let title = document.querySelector('title');

    title.innerHTML = title.innerHTML.replace(/\::\s\w+/, '') + ' :: ' + section;

    setSection(section)
  }

  return (
    <div className="flex flex-row">
      <Sidebar changeContent={hook}></Sidebar>
      <Home show={(section === 'content')}></Home>
      <Tech show={(section === 'tech')}></Tech>
      <Jobs show={(section === 'jobs')}></Jobs>
      <Contact show={(section === 'contact')}></Contact>
    </div>
  )
}

export default App
