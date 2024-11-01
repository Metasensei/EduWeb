import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminList from './AdminList.jsx'

const Admin = () => {
  return (
    <>
    <Routes>
      <Route path='/AdminList' element = {<AdminList/>} />
    </Routes>
    </>
    
  )
}

export default Admin