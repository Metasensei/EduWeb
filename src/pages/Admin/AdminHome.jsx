import React from 'react'
import { Select, MenuItem } from '@mui/material';
import admin from './images/admin.png'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './AdminHome.css';
const data = [
  { name: 'Men', value: 450 },
  { name: 'Women', value: 500 },
];
const line_data = [
  { name: 'Янв', Студенты: 30, Университеты: 0, Страны: 5, Факультеты: 10 },
  { name: 'Мар', Студенты: 29, Университеты: 10, Страны: 10, Факультеты: 30 },
  { name: 'Июн', Студенты: 53, Университеты: 30, Страны: 5, Факультеты: 32 },
  { name: 'Сен', Студенты: 56, Университеты: 35, Страны: 10, Факультеты: 56 },
  { name: 'Дек', Студенты: 60, Университеты: 50, Страны: 9, Факультеты: 50 }
];
const line_colors = {
  Студенты: '#000D7F',
  Университеты: '#EF476F',
  Страны: '#FCCA58',
  Факультеты: '#10CC9B'
};


const AdminHome = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const [selectedLine, setSelectedLine] = useState('all');
  const handleLineChange = (event) => {
    setSelectedLine(event.target.value);
  };

  return (
    <>
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
      <  div className="chart-container" style={{ width: '1000px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {/* Title on the left */}
        <h3 className='dynamic-change' style={{ textAlign: 'left', marginBottom: '20px', }}>Динамика роста или спада</h3>

        {/* Filter on the right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }} className='select'>
          <Select
            value={selectedLine}
            onChange={handleLineChange}
            displayEmpty
            style={{ width: '200px', border: 'none', outline: 'none', }}
          >
            <MenuItem value="all">Показать все</MenuItem>
            <MenuItem value="Студенты">Студенты</MenuItem>
            <MenuItem value="Университеты">Университеты</MenuItem>
            <MenuItem value="Страны">Страны</MenuItem>
            <MenuItem value="Факультеты">Факультеты</MenuItem>
          </Select>
        </div>


        <div className="R-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={line_data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />


              {(selectedLine === 'all' || selectedLine === 'Студенты') && (
                <Line type="monotone" dataKey="Студенты" stroke={line_colors.Студенты} strokeWidth={2} />
              )}
              {(selectedLine === 'all' || selectedLine === 'Университеты') && (
                <Line type="monotone" dataKey="Университеты" stroke={line_colors.Университеты} strokeWidth={2} />
              )}
              {(selectedLine === 'all' || selectedLine === 'Страны') && (
                <Line type="monotone" dataKey="Страны" stroke={line_colors.Страны} strokeWidth={2} />
              )}
              {(selectedLine === 'all' || selectedLine === 'Факультеты') && (
                <Line type="monotone" dataKey="Факультеты" stroke={line_colors.Факультеты} strokeWidth={2} />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
          




    </div>
    </>

  )
}

export default AdminHome
