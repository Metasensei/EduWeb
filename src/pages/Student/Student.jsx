import { useState } from 'react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../Admin/images/logo.png';
import home from '../Admin/images/home.png';
import users from '../Admin/images/2users.png';
import univer from '../Admin/images/univer.png';
import back from '../Admin/images/logout.png';
import docu from '../Student/images/Document.png';
import Profile from '../Student/images/Profile.png';
import './Student.css'
import qizrasmi from './images/qizrasmi.png'
import bildirma from './images/bildirma.png'
import nastroy from './images/Setting.png'

import primg from './images/prfim.png'
const Student = () => {
  const [activeLink, setActiveLink] = useState('/admin');
  const location = useLocation();

  const LinkOnClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="ad_page container">
        <div className="sidebar">
          <p>
            <img src={logo} className="educat" alt="" />
            <span>Education</span>
          </p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/student/' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/student/')}
              to="/student/"
            >
              <img src={Profile} alt="" />
              <span>Профиль</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studentuni' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/student/studentuni')}
              to="/student/studentuni"
            >
              <img src={univer} alt="" />
              <span>Университеты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studentper' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/student/studentper')}
              to="/student/studentper"
            >
              <img src={users} alt="" />
              <span>
                Персональный <br />
                менеджер
              </span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studente' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/student/studente')}
              to="/student/studente"
            >
              <img src={docu} alt="" />
              <span>E-Договор</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/')}
              to="/"
            >
              <img src={back} alt="" />
              <span>Выйти</span>
            </Link>
          </div>
        </div>


        {location.pathname === '/student/' && (

          <div className="custom-content">
            <div className="profilee">


          <h2>Личный кабинет</h2>
         <div className="images">
         <img src={bildirma} alt="" />
          <img src={nastroy} alt="" />

       
         </div>



         <div className="primg">
          <img src={primg} alt="" />
          <h2>Nargiza Akhmedova</h2>
         </div>




            </div>
         <div className='infotmation'>
          <div className='stage1'>
            <h1>Имя</h1>
            <h1>Нафиса</h1>
          </div>
          </div> 

          </div>
        )}

        <Outlet />
      </div>
    </>
  );
};

export default Student;
