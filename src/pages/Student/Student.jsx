import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import home from '../Admin/images/home.png'
import logo from '../Admin/images/logo.png'
import univer from '../Admin/images/univer.png'
import users from '../Admin/images/2users.png'
import back from '../Admin/images/logout.png'



const LinkOnClick = (path) => {
  setActiveLink(path)
  }
  const Student = () => {
    const [activeLink, setActiveLink] = React.useState('/admin')
    return (
    <div>
      <h1>student</h1>
      <div className="ad_page container">
        <div className="sidebar">
          <p><img src={logo} alt="" />Education</p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/student/studentuni' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/student/studentuni')}
              to='/student/studentuni'
            >
              <img src={home} alt="" />Профиль
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/admin/adminuniver' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminuniver')}
              to='/'
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

<h1>ewf</h1>

    </div>
  )
}

export default Student
