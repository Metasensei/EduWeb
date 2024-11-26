import React from 'react'
import pic from './images/profile_pic.png'
const AbData = () => {
  return (
    <div className='main-uni'>
      <div className='top-profile'>
        <h1>Данные</h1>
        <div className='centre-profile'>
              <img src={pic} alt="" />
              <h2>Harvard University</h2>
              <p>Boston, USA</p>
        </div>
      </div>
      <div className="profile-stat">
        <h1>Ваш профиль заполнен на 75%</h1>
        <p>Укажите локацию на карте</p>
          <div className="percent">
           <div className='full'>
             <p>75%</p>
           </div>
          </div>
          <div className='stages'>
                <div className='stage stage1'>
                      <p></p>
                      <h6 className='stage-info'>Заполнить описание</h6>
                </div>
                <div className='stage stage2'>
                      <p></p>
                      <h6 className='stage-info'>Загрузите 10 фото</h6>
                </div>
                <div className='stage stage3'>
                      <p></p>
                      <h6 className='stage-info'>Укажите квоту</h6>
                </div>
                <div className='stage stage4'>
                      <p></p>
                      <h6 className='stage-info'>Укажите локацию на карте</h6>
                </div>
          </div>
      </div>
    </div>
  )
}

export default AbData
