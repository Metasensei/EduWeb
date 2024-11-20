import React from 'react'

import {Routes, Route,Outlet} from 'react-router-dom'


const Admin = () => {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Outlet/>

    </>




  )
}

export default Admin
