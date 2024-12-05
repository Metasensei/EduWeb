import React from 'react'
import { useState } from 'react'
import pic from './images/profile_pic.png'
import pic1 from './images/1-uni-pic.png'
import pic2 from './images/2-uni-pic.png'
import pic3 from './images/3-uni-pic.png'
import pic4 from './images/4-uni-pic.png'
import pic5 from './images/plus-uni.png'
import map from './images/map.png'
const AbData = () => {



  const handleChange = (e) => {
    setValue(e.target.value); // Slider qiymatini yangilash
  };
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
      

        <div className="uni-info">
          <div className='info-div1 info-title'>
            <h3 className='info-name'>Ваши данные</h3>
            <a href="">Изменить</a>
          </div>
          <div className='info-div1'>
            <p className='info-name'>Название</p>
            <p className='info-data'>Harvard Univeristy</p>
          </div>
          <div className='info-div2'>
            <p className='info-name'>Год основание</p>
            <p className='info-data'>1670</p>
          </div>
          <div className='info-div1'>
            <p className='info-name'>Страна</p>
            <p className='info-data'>США</p>
          </div>
          <div className='info-div2'>
            <p className='info-name'>Город</p>
            <p className='info-data'>Cambridge, Massachusets</p>
          </div>
          <div className='info-div1'>
            <p className='info-name'>Девиз</p>
            <p className='info-data'>Veritas (Истина)</p>
          </div>
          <div className='info-div2'>
            <p className='info-name'>Бакалавров</p>
            <p className='info-data'>6,700</p>
          </div>
          <div className='info-div1'>
            <p className='info-name'>Магистров</p>
            <p className='info-data'>15,750</p>
          </div>
          <div className='info-div2'>
            <p className='info-name'>Преподователей</p>
            <p className='info-data'>4,700</p>
          </div>
          <div className='info-div1'>
            <p className='info-name'>Начальная зар -
            плата выпускников</p>
            <p className='info-data'>$15,750 в год</p>
          </div>
          
        </div>

        <div className='opisaniya'>
            <div className='opisaniya-title'>
              <p >Описание</p>
              <a href="">Изменить</a>
            </div>
            <div className='inner-opisaniya'>
            Гарвардский университет (Гарвард) (англ. Harvard University) — один из самых известных университетов США и всего мира, старейший вуз США. Находится в городе Кембридж (входит в состав Бостонской городской агломерации), штат Массачусетс.

            </div>
            <div className='inner-opisaniya'>
            По состоянию на 2010 год в Гарварде работает около 2100 преподавателей и учится около 6700 студентов и 14500 последипломников. 75 лауреатов Нобелевской премии были связаны с университетом как студенты, преподаватели или сотрудники. Гарвардский университет занимает первое место в стране по числу миллиардеров среди выпускников, а его библиотека — крупнейшая академическая в США и третья по величине в стране.

            </div>
            <div className='inner-opisaniya'>
            Гарвард входит в группу элитных американских университетов — Лигу плюща.

            </div>
            <div className='inner-opisaniya'>
            Гарвард имеет самый большой эндаумент (целевой капитал) в мире, который составляет 37,1 млрд долларов.
            </div>
        </div>
        <div className='uni-pics'>
              <div className='pic-title'>Фото галерея</div>
              <div className='pic-collect1'>
                <img className='pic-dona' src={pic1} alt="" />
                <img className='pic-dona' src={pic2} alt="" />
                <img className='pic-dona' src={pic3} alt="" />
                <img className='pic-dona' src={pic3} alt="" />
              </div>
              <div className='pic-collect2'>
                <img className='pic-dona' src={pic4} alt="" />
                <img className='pic-dona' src={pic4} alt="" />
                <img className='pic-dona' src={pic4} alt="" />
                <div className='img-pic'>
                  <img src={pic5} alt="" />
                </div>
              </div>
        </div>
          <div className='student-ranges'>
              {/* <div className="drops">
                <div className='drop'>
                    <div className='select'>
                      <span>Date</span>
                      <div className='caret'></div>
                    </div>
                    <ul className='drop-menu'>
                        <li>2023-2024</li>
                        <li>2022-2023</li>
                        <li>2021-2022</li>
                        <li>2020-2021</li>
                        <li className='active'>2019-2020</li>
                    </ul>
                </div>


                <div className='drop'>
                    <div className='select'>
                      <span>Degree</span>
                      <div className='caret'></div>
                    </div>
                    <ul className='drop-menu'>
                        <li>Associate</li>
                        <li className='active'>Bachelor's</li>
                        <li>Master's</li>
                        <li>Doctoral</li>
                    </ul>
                </div>
              </div> */}
              
    <div class="dropdown-container">
      <div className='drop'>
        
        <select id="years" name="years">
          <option value="2023-2024">2023-2024</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2019-2020">2019-2020</option>
        </select>
      </div>

      <div className='drop'>
        <select id="degrees" name="degrees">
          <option value="Associate">Associate</option>
          <option value="Bachelors">Bachelor's</option>
          <option value="Masters">Master's</option>
          <option value="Doctoral">Doctoral</option>
        </select>
      </div>

      <div className='drop-plus'>
        <img src={pic5} alt="" />
      </div>
  </div>
                <div className='range-div'>
                 <div className='slider-value'>
                    <div className="field-range">
                    
                    <input
                    className='inp-range' 
                    type="range" 
                    min={0} 
                    max={3000} 
                    step="50"
                    list='ticks'/>


                    <datalist id='ticks'>
                       <option value="0"></option>
                       <option value="200"></option>
                       <option value="500"></option>
                       <option value="800"></option>
                       <option value="1000"></option>
                       <option value="2000"></option>
                       <option value="3000"></option>
                    </datalist>

            </div>

                  <div className='scales-range'>
                    <div className="value zero">0</div>
                    <div className="value t2">200</div>
                    <div className="value t5">500</div>
                    <div className="value t8">800</div>
                    <div className="value k1">1000</div>
                    <div className="value k2">2000</div>
                    <div className="value k3">3000</div>
                  </div>
                </div>



          {/* <input className='range'
        type="range"
        min="0"
        max="3000"
        
      />
      
       */}
          
          </div>


          </div>

        <div className='map-div'>
            <div className='map-title'>
              <p>Локация на карте</p>
            </div>
            <a target='_blank' href="https://www.google.com/maps/place/Harvard+University/@42.3744368,-71.1208237,17z/data=!3m1!4b1!4m6!3m5!1s0x89e377427d7f0199:0x5937c65cee2427f0!8m2!3d42.3744368!4d-71.1182488!16zL20vMDNrc3k?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D">
            <img src={map} alt="" />
            </a>
        </div>
    </div>
  )
}

export default AbData
