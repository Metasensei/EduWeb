import React from 'react'
import { Select, MenuItem } from '@mui/material';
import admin from './images/admin.png'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, CartesianGrid, YAxis, ResponsiveContainer, Legend, Line, LineChart } from 'recharts';
import './AdminHome.css';
import { Doughnut } from "react-chartjs-2";
const data = [
  { name: 'Men', value: 800 },
  { name: 'Women', value: 650 },
];

const line_data = [
  { name: 'Янв', Студенты: 30, Университеты: 0, Страны: 5, Факультеты: 10 },
  { name: 'Мар', Студенты: 29, Университеты: 10, Страны: 10, Факультеты: 30 },
  { name: 'Июн', Студенты: 53, Университеты: 30, Страны: 5, Факультеты: 32 },
  { name: 'Сен', Студенты: 56, Университеты: 35, Страны: 10, Факультеты: 56 },
  { name: 'Дек', Студенты: 60, Университеты: 50, Страны: 9, Факультеты: 50 }
];
const data2 = [
  { name: 'English', value: 400 },
  { name: 'Russian', value: 350 },
  { name: 'Korean', value: 150 },
];
const COLORS2 = ['#000D7F', '#EF476F', '#FCCA58', '#10CC9B'];
const line_colors = {
  Студенты: '#000D7F',
  Университеты: '#EF476F',
  Страны: '#FCCA58',
  Факультеты: '#10CC9B'
};
const COLORS = ['#4897D1', '#EF476F'];


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
          <span><img src={admin} alt="" />Nargiza Akhmedova</span>
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
        <div className="chart-container" >
          <div className="chart-top">
            <h3 className='dynamic-change' style={{ textAlign: 'left', marginBottom: '20px', }}>Динамика роста или спада</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
              <Select
                value={selectedLine}
                onChange={handleLineChange}
                displayEmpty
                style={{ width: '150px', height: '40px', border: 'none', outline: 'none', }}
              >
                <MenuItem value="all">Показать все</MenuItem>
                <MenuItem value="Студенты">Студенты</MenuItem>
                <MenuItem value="Университеты">Университеты</MenuItem>
                <MenuItem value="Страны">Страны</MenuItem>
                <MenuItem value="Факультеты">Факультеты</MenuItem>
              </Select>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={line_data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* Lines with conditional rendering based on selected filter */}
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
        <div className='chart-cont'  >
        <div className='chart-don' style={{
          width: '530px',
          height: '336px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
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

        {/* Pie Chart 2: Языки обучения университетов */}
        <div className='chart-don' style={{
          width: '530px',
          height: '336px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
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
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
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
              3
            </div>
          </div>
        </div>
      </div>
          

        


      </div>
    </>

  )
}

export default AdminHome
