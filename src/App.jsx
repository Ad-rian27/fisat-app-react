import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentEntry from './components/StudentEntry'
import SearchStudent from './components/SearchStudent'
import ViewStudents from './components/ViewStudents'
import DeleteStudent from './components/DeleteStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentEntry/>
      <SearchStudent/>
      <ViewStudents/>
      <DeleteStudent />
    </>
  )
}

export default App
