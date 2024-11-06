import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Universty.css';
import users2 from './images/2users.png';
import users3 from './images/3users.png';
import docs from './images/docs.png';
import home from './images/home.png';
import logo from './images/logo.png';
import logout from './images/logout.png';
import AbStudents from './AbStudents';
import Mainuni from './Mainuni';
import AbInvoice from './AbInvoice';
import AbData from './AbData';
import group from './images/Group.png'

const Universty = () => {
  const [activeLink, setActiveLink] = useState('/universty');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='ab-page1'>
      <div className='side-bar'>
        <p><img src={logo} alt="" />Education</p>
        <div className="ablinks">
          <Link
            className={`un_side_link ${activeLink === '/universty' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/universty')}
            to='/universty'
          >
            <img src={home} alt="" />Главное
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/universty/abstudent' ? 'active' : ''}`}
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
  );
}

export default Universty;