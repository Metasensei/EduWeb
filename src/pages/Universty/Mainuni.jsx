import React from 'react'
import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts'
import {Route, Routes, NavLink } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './Universty.css'
import users2 from './images/2users.png'
import users3 from './images/3users.png'
import docs from './images/docs.png'
import home from './images/home.png'
import logo from './images/logo.png'
import logout from './images/logout.png'

const data = [
  { name: 'Men', value: 450 },
  { name: 'Women', value: 500 },
];
const data2 = [
  {name: 'English', value: 400},
  {name: 'Russian', value: 350},
  {name: 'Korean', value: 150},

]
const COLORS = ['#4897D1', '#EF476F'];

const uData = [540, 720, 760, 890, 1000];
const pData = [240, 139, 980, 390, 480];
const aData = [120, 300, 410, 540, 280];
const qData = [300, 170, 320, ]
const xLabels = [
  'Янв',
  'Мар',
  'Июн',
  'Сен',
  'Дек',
];
const Mainuni = () => {

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
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
        <div className='LineContainer'>
            <LineChart
            width={900}
            height={390}
            
            series={[
            { data: pData, label: 'Поступившие' },
            { data: uData, label: 'Студенты' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>

        <div className='chart-cont'>

            <div className='chart-don' style={{
      width: '530px',
      height: '336px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fffff', // Optional background color
      textAlign: 'center'
    }}>
      <h3 className='chart-name'>Студенты по полу</h3>
      <div className='chart-inner' style={{ position: 'relative' }}>
        <PieChart width={188} height={188}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={94}
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          {total}
        </div>
      </div>
            </div>

            <div className='chart-don' style={{
      width: '530px',
      height: '336px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fffff', // Optional background color
      textAlign: 'center'
    }}>
      <h3 className='chart-name'>Языки обучения университетов</h3>
      <div className='chart-inner' style={{ position: 'relative' }}>
        <PieChart width={188} height={188}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={94}
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          {total}
        </div>
        
      </div>
            </div>
        </div>


        </div>
  )
}

export default Mainuni
