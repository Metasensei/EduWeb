import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminUniver from './AdminUniver'
import logo from '../Admin/images/logo.png'
import home from '../Admin/images/home.png'
import users from '../Admin/images/2users.png'
import univer from '../Admin/images/univer.png'
import AdminStudent from '../Admin/AdminStudemt'
import back from '../Admin/images/logout.png'
import './Admin.css'





function Admin() {
  const [activeLink, setActiveLink] = useState('/admin')

  const LinkOnClick = (path) => {
    setActiveLink(path)
  }

  return (
    <>



      <div className="ad_page container">
        <div className="sidebar">
          <p><img src={logo} alt="" />Education</p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminhome' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminhome')}
              to='/admin/adminhome'
            >
              <img src={home} alt="" />Главное
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminuniver' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminuniver')}
              to='/admin/adminuniver'
            >
              <img src={univer} alt="" />Университеты
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminstudent' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminstudent')}
              to='/admin/adminstudent'
            >
              <img src={users} alt="" />Студенты
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/login' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/login')}
              to='/login'
            >
              <img src={back} alt="" />Выйти
            </Link>

          </div>
        </div>
        <Outlet/>
      </div>



    </>




  )
}

export default Admin
