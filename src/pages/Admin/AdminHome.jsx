import React from 'react'
import admin from './images/admin.png'
import './AdminHome.css'

const AdminHome = () => {
  return (
    <div className='ad_home'>
      <nav>
        <h1>Главное</h1>
        <p><img src={admin} alt="" />Nargiza Akhmedova</p>
      </nav>
      <div className='ad_cards'>
                <div className='ad_card1 ad-card'>
                  <p>Студенты</p>
                  <h5>1424</h5>
                </div>
                <div className='ad_card2 ad-card'>
                  <p>Университеты</p>
                  <h5>58</h5>
                </div>
                <div className='ad_card3 ad-card'>
                  <p>Страны</p>
                  <h5>8</h5>
                </div>
                <div className='ad_card4 ad-card'>
                  <p>Факультеты</p>
                  <h5>740</h5>
                </div>
          </div>
    
      </div>
  )
}

export default AdminHome
