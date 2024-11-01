import React from 'react'
import './admin.css'
import { NavLink,Routes,Route } from 'react-router-dom'
import Uni from '../Admin/Universitets'

const Admin = () => {
  return (
    <div className="admin">
    <Routes>
      <Route path="/Universitets" element={<Uni />} />
    </Routes>
      <header>
        <nav>
          <div className="logo">
            <img src="" alt="" />
          <h3>Education</h3>
          </div>

          
        </nav>
      </header>

    </div>
  )
}

export default Admin