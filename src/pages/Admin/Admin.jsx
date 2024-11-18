import React from 'react'

import {Routes, Route,Outlet} from 'react-router-dom'
import AdminList from './AdminList'

const Admin = () => {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
     <div className='ab-page1'>
      <div className='side-bar'>
        <p><img src={logo} alt="" />Education</p>
        <div className="ablinks">
          <Link
            className={`admin_side_link ${activeLink === '/admin' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/admin')}
            to='/admin'
          >
            <img src={home} alt="" />Главное
          </Link>
          <Link
            className={`admin_side_link ${activeLink === '/universty/abstudent' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/universty/abstudent')}
            to='/universty/abstudent'
          >
            <img src={users3} alt="" />Студенты
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/universty/abinvoice' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/universty/abinvoice')}
            to='/universty/abinvoice'
          >
            <img src={users2} alt="" />Инвойсы
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/universty/abdata' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/universty/abdata')}
            to='/universty/abdata'
          >
            <img src={docs} alt="" />Данные
          </Link>
          <a href='/login' className='un_side_link'>
            <img src={logout} alt="" />Выйти
          </a>
        </div>
      </div>
      <Outlet />
    </div>

    </>




  )
}

export default Admin
