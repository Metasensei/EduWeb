import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, CartesianGrid, YAxis, ResponsiveContainer, Legend, Line, LineChart } from 'recharts';
import './Universty.css';
import harvard from './images/harvard.png'
import { useState } from 'react';
const line_data = [
  { name: 'Янв', Студенты: 30, Непоступившие: 0, Инвойсы: 5, Поступившие: 10 },
  { name: 'Мар', Студенты: 29, Непоступившие: 10, Инвойсы: 4, Поступившие: 30 },
  { name: 'Июн', Студенты: 53, Непоступившие: 30, Инвойсы: 1, Поступившие: 32 },
  { name: 'Сен', Студенты: 56, Непоступившие: 35, Инвойсы: 10, Поступившие: 56 },
  { name: 'Дек', Студенты: 60, Непоступившие: 50, Инвойсы: 9, Поступившие: 50 }
];
const line_colors = {
  Студенты: '#000D7F',
  Непоступившие: '#EF476F',
  Инвойсы: '#FCCA58',
  Поступившие: '#10CC9B'
};
const commissionData = [
  { name: 'Paid', value: 25000 },
  { name: 'Unpaid', value: 10000 },
];

const COMMISSION_COLORS = ['#C6E4FB', '#4897D1'];

const semesterData = [
  { name: 'Summer', percentage: 12 },
  { name: 'Fall', percentage: 30 },
  { name: 'Winter', percentage: 50 },
  { name: 'Spring', percentage: 60 },
];

const data = [
  { name: 'Men', value: 450 },
  { name: 'Women', value: 500 },
];
const data2 = [
  { name: 'English', value: 400 },
  { name: 'Russian', value: 350 },
  { name: 'Korean', value: 150 },
];
const data3 = [
  { name: 'Passed', value: 700 },
  { name: 'Failed', value: 250 },
];
const data4 = [
  { name: 'Math', popularity: 12 },
  { name: 'English', popularity: 30 },
  { name: 'Physics', popularity: 50 },
  { name: 'Business', popularity: 60 },
];
const COLORS = ['#4897D1', '#EF476F'];
const COLORS2 = ['#000D7F', '#EF476F', '#FCCA58', '#10CC9B'];

const data5 = [
  { name: "Jan", Students: 30, NotAdmitted: 10, Invoices: 5, Admitted: 15 },
  { name: "Feb", Students: 50, NotAdmitted: 12, Invoices: 8, Admitted: 20 },
  { name: "Mar", Students: 70, NotAdmitted: 15, Invoices: 6, Admitted: 30 },
  { name: "Jun", Students: 90, NotAdmitted: 18, Invoices: 7, Admitted: 40 },
  { name: "Sep", Students: 100, NotAdmitted: 25, Invoices: 10, Admitted: 45 },
  { name: "Dec", Students: 110, NotAdmitted: 20, Invoices: 9, Admitted: 50 }
];


const Mainuni = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const [selectedLine, setSelectedLine] = useState('all');
  const handleLineChange = (event) => {
    setSelectedLine(event.target.value);
  };
  return (
    <div className='main-uni'>

      <div className='top-main-uni'>
        {/* <h2 className='glav'>Главное</h2> */}
        {/* <div className='right-top'>
          <img className='harvard-img' src={harvard} alt="" />
          <div>
            <p className='har'>Harvard University</p>
            <p className='bos'>Boston, USA</p>
          </div>
        </div> */}
          
        <div className="chart-container" style={{width: '1090px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>

      {/* <h3 className='dynamic-change' style={{ textAlign: 'left', marginBottom: '20px',  }}>Динамика роста или спада</h3> */}
      
      <div className='main-menu-cards'>
                <div className='card-menu card-menu1'>
                  <p className='title-card'>Студенты</p>
                  <p className='number-card'>1424</p>
                </div>
                <div className='card-menu card-menu2'>
                  <p className='title-card'>Инвойсы</p>
                  <p className='number-card'>80</p>
                </div>
                <div className='card-menu card-menu3'>
                  <p className='title-card'>Поступившие</p>
                  <p className='number-card'>52</p>
                </div>
                <div className='card-menu card-menu4'>
                  <p className='title-card'>Непоступившие</p>
                  <p className='number-card'>18</p>
                </div>
          </div>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Select
          value={selectedLine}
          onChange={handleLineChange}
          displayEmpty
          style={{ width: '200px', border: 'none', outline: 'none', }}
        >
          <MenuItem value="all">Показать все</MenuItem>
          <MenuItem value="Студенты">Студенты</MenuItem>
          <MenuItem value="Непоступившие">Непоступившие</MenuItem>
          <MenuItem value="Инвойсы">Инвойсы</MenuItem>
          <MenuItem value="Поступившие">Поступившие</MenuItem>
        </Select>
      </div> */}
      
      <div className="chart-container" style={{ width: '1090px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {/* Title on the left */}
        <h3 className='dynamic-change' style={{ textAlign: 'left', marginBottom: '20px', }}>Динамика роста или спада</h3>

        {/* Filter on the right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <Select
            value={selectedLine}
            onChange={handleLineChange}
            displayEmpty
            style={{ width: '200px', border: 'none', outline: 'none', }}
          >
            <MenuItem value="all">Показать все</MenuItem>
            <MenuItem value="Студенты">Студенты</MenuItem>
            <MenuItem value="Непоступившие">Непоступившие</MenuItem>
            <MenuItem value="Инвойсы">Инвойсы</MenuItem>
            <MenuItem value="Поступившие">Поступившие</MenuItem>
          </Select>
        </div>

        {/* Line Chart */}
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
            {(selectedLine === 'all' || selectedLine === 'Непоступившие') && (
              <Line type="monotone" dataKey="Непоступившие" stroke={line_colors.Непоступившие} strokeWidth={2} />
            )}
            {(selectedLine === 'all' || selectedLine === 'Инвойсы') && (
              <Line type="monotone" dataKey="Инвойсы" stroke={line_colors.Инвойсы} strokeWidth={2} />
            )}
            {(selectedLine === 'all' || selectedLine === 'Поступившие') && (
              <Line type="monotone" dataKey="Поступившие" stroke={line_colors.Поступившие} strokeWidth={2} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>


      <div className='chart-cont'>
        {/* Pie Chart 1: Студенты по полу */}
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

      <div className='chart-cont'>
        {/* Pie Chart 3: Students by Pass/Fail */}
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
          <h3 className='chart-name'>Students by Pass/Fail</h3>
          <div className='chart-inner' style={{ position: 'relative' }}>
            <PieChart width={188} height={188}>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={94}
                dataKey="value"
                paddingAngle={5}
              >
                {data3.map((entry, index) => (
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
              {data3.reduce((acc, item) => acc + item.value, 0)}
            </div>
          </div>
        </div>

        {/* Bar Chart: Most Popular Faculties */}
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
          <h3 className='chart-name'>Most Popular Faculties</h3>
          <BarChart
            width={400}
            height={250}
            data={data4}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="popularity">
              {data4.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS2[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className='chart-cont'>
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
          <h3 className='chart-name'>Students by Semesters</h3>
          <BarChart
            width={400}
            height={250}
            data={semesterData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="percentage">
              {semesterData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
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
          <h3 className='chart-name'>Комиссионные консультантам</h3>
          <BarChart
            layout="vertical"
            width={400}
            height={250}
            data={commissionData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" unit="$" />
            <YAxis type="category" dataKey="name" />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Bar dataKey="value">
              {commissionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COMMISSION_COLORS[index % COMMISSION_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
  };

export default Mainuni;
