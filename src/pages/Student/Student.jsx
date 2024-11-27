import React from 'react'
import StudentUni from '../Student/StudentUni'

const Student = () => {
  return (
    <div>
      <h1>student</h1>
      <div className="ad_page container">
        <div className="sidebar">
          <p><img src={logo} alt="" />Education</p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/student/studentuni' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin/adminhome')}
              to='/student/studentuni'
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



    </div>
  )
}

export default Student
