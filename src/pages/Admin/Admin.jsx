import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminUniver from './AdminUniver'
import logo from '../Admin/images/logo.png'
import home from '../Admin/images/home.png'
import users from '../Admin/images/2users.png'
import univer from '../Admin/images/univer.png'
import AdminStudent from '../Admin/AdminStudent'
import back from '../Admin/images/logout.png'
import './Admin.css'
import AdminHome from './AdminHome'





function Admin() {
  const [activeLink, setActiveLink] = useState('/admin')

  const LinkOnClick = (path) => {
    setActiveLink(path)
  }

  return (
    <>



      <div className="ad_page container">
        <div className="sidebar">
          <p><img src={logo} className='educat' alt="" /><span>Education</span></p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/admin' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin')}
              to='/admin'
            >
              <img src={home} alt="" /><span>Главное</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminuniver' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminuniver')}
              to='/admin/adminuniver'
            >
              <img src={univer} alt="" /><span>Университеты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminstudent' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminstudent')}
              to='/admin/adminstudent'
            >
              <img src={users} alt="" /><span>Студенты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/login' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/login')}
              to='/'
            >
              <img src={back} alt="" /><span>Выйти</span>
            </Link>

          </div>
        </div>
        <Outlet></Outlet>
      </div>
      

    </>




  )
}

export default Admin
