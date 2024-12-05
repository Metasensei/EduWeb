import { useState } from 'react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../Admin/images/logo.png';
import users from '../Admin/images/2users.png';
import univer from '../Admin/images/univer.png';
import back from '../Admin/images/logout.png';
import docu from '../Student/images/Document.png';
import Profile from '../Student/images/Profile.png';
import './Student.css';
import bildirma from './images/bildirma.png';
import nastroy from './images/Setting.png';
import primg from './images/prfim.png';
import downno from '../Admin/images/download.png';

const Student = () => {
  const [activeLink, setActiveLink] = useState('/admin');
  const location = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="ad_page container">
        <div className="sidebar">
          <p>
            <img src={logo} className="educat" alt="Education Logo" />
            <span>Education</span>
          </p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/student/' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/student/')}
              to="/student/"
            >
              <img src={Profile} alt="Profile Icon" />
              <span>Профиль</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studentuni' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/student/studentuni')}
              to="/student/studentuni"
            >
              <img src={univer} alt="University Icon" />
              <span>Университеты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studentper' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/student/studentper')}
              to="/student/studentper"
            >
              <img src={users} alt="Users Icon" />
              <span>Персональный менеджер</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/student/studente' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/student/studente')}
              to="/student/studente"
            >
              <img src={docu} alt="Document Icon" />
              <span>E-Договор</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/')}
              to="/"
            >
              <img src={back} alt="Logout Icon" />
              <span>Выйти</span>
            </Link>
          </div>
        </div>

        {location.pathname === '/student/' && (
          <div className="custom-content">
            <div className="profilee">
              <h2>Личный кабинет</h2>
              <div className="images">
                <img src={bildirma} alt="Notification Icon" />
                <img src={nastroy} alt="Settings Icon" />
              </div>
              <div className="primg">
                <img src={primg} alt="Profile Picture" />
                <h2>Nargiza Akhmedova</h2>
              </div>
            </div>

            <div className="infotmation">
              <div className="stage1">
                <h1 className="xp1">Имя</h1>
                <h1 className="fx1">Нафиса</h1>
                <a href="">Изменить</a>
              </div>
              <div className="stage2">
                <h1 className="m1">Фамилия</h1>
                <h1 className="m2">Абдураимова</h1>
              </div>
              <div className="stage3">
                <h1 className="st1">Отчество</h1>
                <h1 className="st2">Зафар кизи</h1>
              </div>
              <div className="stage5">
                <h1 className="np1">Университет</h1>
                <h1 className="np2">Омская гуманитарная академия</h1>
              </div>
              <div className="stage6">
                <h1 className="we1">Факультет</h1>
                <h1 className="we2">
                  Педагогическое образование (с двумя профилями подготовки) (уровень <br />
                  бакалавриата)
                </h1>
              </div>
              <div className="stage7">
                <h1 className="win1">Специальность</h1>
                <h1 className="win2">Начальное образование и иностранный язык (английский язык)</h1>
              </div>
              <div className="stage8">
                <h1 className="pass">Паспорт</h1>
                <img src={downno} className="pass1" alt="Passport Icon" />
              </div>
              <div className="stage9">
                <h1 className="din1">Диплом</h1>
                <img src={downno} className="win1" alt="Diploma Icon" />
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
