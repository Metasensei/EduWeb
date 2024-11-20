import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin/Admin'
import Student from './pages/Student/Student'
import Universty from './pages/Universty/Universty'
import Home from './pages/Home/Home'
import AbStudents from './pages/Universty/AbStudents'
import Mainuni from './pages/Universty/Mainuni'
import AbInvoice from './pages/Universty/AbInvoice'
import AbData from './pages/Universty/AbData'
import AdminUniver from './pages/Admin/AdminUniver'
import AdmminStudent from '../src/pages/Admin/AdminStudemt'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/admin' element={<Admin />} >
          <Route path='adminuniver' element={<AdminUniver />} />
          <Route path='adminstudent' element={<AdmminStudent />} />
        </Route>
        <Route path='/student' element={<Student />} />
        <Route path='/universty' element={<Universty />} >
          <Route index element={<Mainuni />} />
          <Route path='abstudent' element={<AbStudents />} />
          <Route path='abinvoice' element={<AbInvoice />} />
          <Route path='abdata' element={<AbData />} />
        </Route>
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='*' element={<h1>404 error</h1>} />
      </Routes>
    </>
  )
}

export default App