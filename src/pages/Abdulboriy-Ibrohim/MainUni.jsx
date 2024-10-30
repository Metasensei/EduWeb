import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts'
// import {Route, Routes, NavLink } from 'react-router-dom';




const uData = [540, 720, 760, 890, 1000];
const pData = [240, 139, 980, 390, 480];
const xLabels = [
  'Янв',
  'Мар',
  'Июн',
  'Сен',
  'Дек',
];

const MainUni = () => {
    let  student = [
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        },
        {
          "ism": "",
          "fimiliya": "",
          "ochestva": "",
          "universitet": "",
          "fakultet": "",
          "spetsial": "",
          "ielts": "",
          "dokument": "",
        }
        
      ]
    
    
      return (
        <div className='ab-page1'>
          <div className='side-bar'>
    
    </div>
    <div className='main-uni'>
      <div className='ab-cards'>
        <div className="ab-card ab-card1">
          <p>Студенты</p>
          <h5>1424</h5>
        </div>
        <div className="ab-card ab-card2">
          <p>Инвойсы</p>
          <h5>80</h5>
        </div>
        <div className="ab-card ab-card3">
          <p>Поступившие</p>
          <h5>52</h5>
        </div>
        <div className="ab-card ab-card4">
          <p>Непоступившие</p>
          <h5>18</h5>
        </div>
      </div>
    <LineChart
    width={500}
    height={300}
    
    series={[
    { data: pData, label: 'Поступившие' },
    { data: uData, label: 'Студенты' },
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
        </div>
      )
}

export default MainUni
