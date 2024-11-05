import React from 'react'
import harvard from './images/harvard.png'
import group from './images/excel.svg'
import search from './images/search.png'
import filter from './images/filter.png'
const AbStudents = () => {
  return (
    <div className='main-uni' >
     <div className='top-main-uni'>
          <h2 className='glav'>Главное</h2>
          <div className='right-top'>
            <img src={harvard} alt="" />
            <div>
              <p className='har'>Harvard University</p>
              <p className='bos'>Boston, USA</p>
            </div>
          </div>
        </div>
       <div className='btn-cont'>
          <button className='excel-btn'><img src={group} alt="" />Excel</button> 
       </div> 

       <form className='form' action="">
          <div className='search'>
              <img className='src-icon' src={search} alt="" />
              <input type='search' className="search-input" placeholder='Поиск абитуриентов' />
          </div>
          <div className='filter-wrap'>
            <img className='filter' src={filter} alt="" />
          </div>
       </form>

    </div>
  )
}

export default AbStudents
