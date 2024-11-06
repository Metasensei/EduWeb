import React from 'react';
import { LineChart } from '@mui/x-charts';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, CartesianGrid, YAxis } from 'recharts';
import './Universty.css';
import harvard from './images/harvard.png'
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

const Mainuni = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className='main-uni'>
      {/* Your cards and line chart code here */}
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
  );
};

export default Mainuni;
