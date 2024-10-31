import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
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

const Universty = () => {
  return (
    <div className='ab-page1'>
      <div className='side-bar'>
        <p><img src={logo} alt="" />Education</p>
        <div className="ablinks">
          <NavLink
            className='a'
            style={({ isActive }) => ({
              borderLeft: isActive ? '7px solid white' : '7px solid transparent',
            })}
            to='/universty'
          >
            <img src={home} alt="" />Главное
          </NavLink>
          <NavLink
            className='a'
            style={({ isActive }) => ({
              borderLeft: isActive ? '7px solid white' : '7px solid transparent',
            })}
            to='/universty/abstudent'
          >
            <img src={users3} alt="" />Студенты
          </NavLink>
          <NavLink
            className='a'
            style={({ isActive }) => ({
              borderLeft: isActive ? '7px solid white' : '7px solid transparent',
            })}
            to='/universty/abinvoice'
          >
            <img src={users2} alt="" />Инвойсы
          </NavLink>
          <NavLink
            className='a'
            style={
              ({ isActive }) => ({
              borderLeft: isActive ? '7px solid white' : '7px solid transparent',
              
            })}
            to='/universty/abdata'
          >
            <img src={docs} alt="" />Данные
          </NavLink>
          <a href='/login' className='a'>
            <img src={logout} alt="" />Выйти
          </a>
        </div>
      </div>
          <Routes>
            <Route path='/' element={<Mainuni/>}/>
            <Route path='/universty/abstudent' element={<AbStudents/>}/>
            <Route/>
            <Route/>
          </Routes>
    </div>
  );
}

export default Universty;
