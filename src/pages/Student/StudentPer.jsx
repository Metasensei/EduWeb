import React from 'react';
import './StudentPer.css';
import admin from '../Student/images/admin.png';


const StudentPer = () => {
  return (
    <>
      <div className="wrapperr">
        <div className="header">
          <div className="hhh">
            <h3>Персональный менеджер</h3>
          </div>
          <div className="h-img">
            <img src={admin} alt="Admin" />
          </div>
          <div className="hhhhhh">
            <h6>Nargiza Akhmedova</h6>
          </div>
        </div>
        <div className="body">
          <div className="body1">
            <div className="body1_img">
              <img src={admin} className='hinju' alt="Nafisa" />
            </div>
            <div className="name">
              <h4>Нафиса Абдураимова</h4>
              <h5>Chief Recruiter, Education</h5>
            </div>
          </div>
          <div className="body2">
            <h4>
              <span style={{fontWeight: '600'}}>Нафиса Абдураимова</span> {''} является ветераном в деле рекруитинга и подбора <br /> университетов. 
              Она вам все досколнально объяснит и всему научит. Нафиса <br /> Абдураимова является 
              ветераном в деле рекруитинга и подбора университетов.
              <br />
              Она вам все досколнально объяснит и всему научит.
            </h4>
          </div>
          <div className="body3">
            <h4>Номер телефона: {''} <span style={{fontWeight: '400', fontFamily: 'Raleway'}}>+998 (99) 607 - 74 - 40</span></h4>
            <h4>Email адрес: {''} <span style={{fontWeight: '400', fontFamily: 'Raleway'}}>Nafisa.education@gmail.com</span></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPer;
