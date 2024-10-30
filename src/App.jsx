import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin/Admin'
import Student from './pages/Student/Student'
import Universty from './pages/Universty/Universty'
import Home from './pages/Home/Home'

function App() {

  return (
    <>

      <Routes>
        <Route index element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/student' element={<Student />} />
        <Route path='/universty' element={<Universty />} />
        <Route path='/login' element={ "<h1>Login</h1>> "}/>
        <Route path='*' element={ "<h1>404 error</h1>> "}/>
      </Routes>
    </>
  )
}

export default App
