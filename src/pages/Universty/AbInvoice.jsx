
// import React, { useState } from 'react';
// import harvard from './images/harvard.png';
// import group from './images/excel.svg';
// import search from './images/search.png';
// import filter from './images/filter.png';
// // import check from './images/check_big.png';
// // import plus from './images/plus.png'
// // import idea from './images/idea (1) 1.png'
// // import warning from './images/warning 1.png'
// const AbInvoice = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [facultyFilter, setFacultyFilter] = useState("");

//   let students = [
//     {
//       "name": "Шохрух",
//       "surename": "Махмудов",
//       "faculty": "Business Management",
//       "ielts": 7.0,
//       "gpa": 5.0,
//       "university": "Amridge University",
//       "speciality": "Marketing"
//     },
//     {
//       "name": "Нафиса",
//       "surename": "Абдураимова",
//       "faculty": "Pedagogy",
//       "ielts": 7.5,
//       "gpa": 4.7,
//       "university": "Omsk humanitarian academy",
//       "speciality": "Английский язык"
//     },
//     {
//       "name": "Камронбек",
//       "surename": "Рахимов",
//       "faculty": "Business Management",
//       "ielts": 7.0,
//       "gpa": 5.0,
//       "university": "Langston University",
//       "speciality": "Accounting"
//     },
//     {
//       "name": "Сайёра",
//       "surename": "Турсунова",
//       "faculty": "Computer Science",
//       "ielts": 6.5,
//       "gpa": 3.8,
//       "university": "Uzbekistan State University",
//       "speciality": "Software Engineering"
//     },
//     {
//       "name": "Дилшод",
//       "surename": "Исмоилов",
//       "faculty": "Law",
//       "ielts": 6.0,
//       "gpa": 3.5,
//       "university": "Tashkent Law Institute",
//       "speciality": "International Law"
//     },
//     {
//       "name": "Зухра",
//       "surename": "Норматова",
//       "faculty": "Medicine",
//       "ielts": 6.5,
//       "gpa": 4.1,
//       "university": "Tashkent Medical Academy",
//       "speciality": "General Medicine"
//     },
//     {
//       "name": "Бахромбек",
//       "surename": "Юлдашев",
//       "faculty": "Engineering",
//       "ielts": 6.5,
//       "gpa": 3.9,
//       "university": "Karshi Engineering University",
//       "speciality": "Mechanical Engineering"
//     },
//     {
//       "name": "Шахзодбек",
//       "surename": "Юсупов",
//       "faculty": "Economics",
//       "ielts": 6.0,
//       "gpa": 3.7,
//       "university": "National University of Uzbekistan",
//       "speciality": "Finance"
//     },
//     {
//       "name": "Умидбек",
//       "surename": "Сайфуллаев",
//       "faculty": "Computer Science",
//       "ielts": 6.5,
//       "gpa": 4.0,
//       "university": "Samarkand State University",
//       "speciality": "Data Science"
//     },
//     {
//       "name": "Санжарбек",
//       "surename": "Мирзахмедов",
//       "faculty": "Architecture",
//       "ielts": 5.5,
//       "gpa": 3.6,
//       "university": "Tashkent Institute of Architecture",
//       "speciality": "Urban Design"
//     },
//     {
//       "name": "Жахонгир",
//       "surename": "Садуллаев",
//       "faculty": "Computer Science",
//       "ielts": 6.5,
//       "gpa": 3.9,
//       "university": "Andijan State University",
//       "speciality": "Cybersecurity"
//     },
//     {
//       "name": "Лазизбек",
//       "surename": "Эргашев",
//       "faculty": "Business Administration",
//       "ielts": 7.0,
//       "gpa": 4.3,
//       "university": "Westminster International University in Tashkent",
//       "speciality": "Entrepreneurship"
//     },
//     {
//       "name": "Озода",
//       "surename": "Файзуллаева",
//       "faculty": "Law",
//       "ielts": 6.0,
//       "gpa": 3.4,
//       "university": "National University of Uzbekistan",
//       "speciality": "Criminal Law"
//     },
//     {
//       "name": "Шахло",
//       "surename": "Хамдамова",
//       "faculty": "Linguistics",
//       "ielts": 7.5,
//       "gpa": 4.2,
//       "university": "Bukhara State University",
//       "speciality": "French Language Studies"
//     },
//     {
//       "name": "Муниса",
//       "surename": "Эргашева",
//       "faculty": "Art and Design",
//       "ielts": 5.5,
//       "gpa": 3.8,
//       "university": "Uzbek State Institute of Arts and Culture",
//       "speciality": "Graphic Design"
//     },
//     {
//       "name": "Ботирбек",
//       "surename": "Алимов",
//       "faculty": "Physics",
//       "ielts": 6.0,
//       "gpa": 3.5,
//       "university": "Tashkent State Technical University",
//       "speciality": "Nuclear Physics"
//     },
//     {
//       "name": "Севинч",
//       "surename": "Саидова",
//       "faculty": "Education",
//       "ielts": 6.5,
//       "gpa": 3.7,
//       "university": "Namangan State University",
//       "speciality": "Elementary Education"
//     },
//     {
//       "name": "Фаррух",
//       "surename": "Шарипов",
//       "faculty": "Biology",
//       "ielts": 6.5,
//       "gpa": 4.0,
//       "university": "Tashkent State Pedagogical University",
//       "speciality": "Genetics"
//     },
//     {
//       "name": "Нодира",
//       "surename": "Кадырова",
//       "faculty": "Psychology",
//       "ielts": 6.5,
//       "gpa": 4.1,
//       "university": "Samarkand State University",
//       "speciality": "Clinical Psychology"
//     },
//     {
//       "name": "Азамат",
//       "surename": "Умаров",
//       "faculty": "Environmental Science",
//       "ielts": 6.0,
//       "gpa": 3.6,
//       "university": "Urgench State University",
//       "speciality": "Sustainable Development"
//     }
//   ];

//   // Extract unique faculties for the dropdown filter
//   const uniqueFaculties = [...new Set(students.map(student => student.faculty))];

//   const filteredStudents = students.filter((student) => {
//     const query = searchQuery.toLowerCase();
//     const matchesFaculty = facultyFilter ? student.faculty === facultyFilter : true;
//     return (
//       matchesFaculty &&
//       (student.name.toLowerCase().includes(query) ||
//         student.surename.toLowerCase().includes(query) ||
//         student.faculty.toLowerCase().includes(query) ||
//         student.ielts.toString().includes(query) ||
//         student.gpa.toString().includes(query))
//     );
//   });

//   return (
//     <div className="main-uni">
//       <div className="top-main-uni">
//         <h2 className="glav">Главное</h2>
//         <div className="right-top">
//           <img className="harvard-img" src={harvard} alt="" />
//           <div>
//             <p className="har">Harvard University</p>
//             <p className="bos">Boston, USA</p>
//           </div>
//         </div>
//       </div>

//       <div className="btn-cont">
//         <button className="excel-btn">
//           <img src={group} alt="" />
//           Excel
//         </button>
//       </div>

//       <form className="form" action="">
//         <div className="search">
//           <img className="src-icon" src={search} alt="" />
//           <input
//             type="search"
//             className="search-input"
//             placeholder="Поиск абитуриентов"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className='filter-wrap'>
//           <img className='filter' src={filter} alt="" />
//         </div>

//       </form>

//       {/* Student List */}
//       <div className="student-list">
//         <div className='list-top-part'>
//           <h1 className="student-list-title">Список абитуриентов</h1>

//           <select
//             className="faculty-dropdown"
//             value={facultyFilter}
//             onChange={(e) => setFacultyFilter(e.target.value)}
//           >
//             <option value="">All Faculties</option>
//             {uniqueFaculties.map((faculty, index) => (
//               <option key={index} value={faculty}>
//                 {faculty}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="st-list-names">
//           <h3>ФИО</h3>
//           <h3>Факультет</h3>
//           <h3>IELTS</h3>
//           <h3>GPA</h3>
//           <h3 className='pri'>Принять</h3>
//         </div>
//         {filteredStudents.map((student, index) => (
//           <div
//             key={index}
//             className="student-item"
//             style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0FAFF' }}
//           >
//             <span className="student-name">
//               {student.name} {student.surename}
//             </span>
//             <span className="student-faculty">{student.faculty}</span>
//             <span className="student-ielts">{student.ielts}</span>
//             <span className="student-gpa">{student.gpa}</span>
//             <div className="buts">
//               <button><img src={check} alt="" /></button>
//               <button><img src={plus} alt="" /></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AbInvoice;

import React, { useState } from 'react';
import harvard from './images/harvard.png';
import group from './images/excel.svg';
import search from './images/search.png';
import filter from './images/filter.png';
import check from './images/check_big.png'
import xpert from './images/coolicon.png'

const AbStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [facultyFilter, setFacultyFilter] = useState("");

  let students = [
    {
      "name": "Шохрух",
      "surename": "Махмудов",
      "faculty": "Business Management",
      "ielts": 7.0,
      "gpa": 5.0,
      "university": "Amridge University",
      "speciality": "Marketing"
    },
    {
      "name": "Нафиса",
      "surename": "Абдураимова",
      "faculty": "Pedagogy",
      "ielts": 7.5,
      "gpa": 4.7,
      "university": "Omsk humanitarian academy",
      "speciality": "Английский язык"
    },
    {
      "name": "Камронбек",
      "surename": "Рахимов",
      "faculty": "Business Management",
      "ielts": 7.0,
      "gpa": 5.0,
      "university": "Langston University",
      "speciality": "Accounting"
    },
    {
      "name": "Сайёра",
      "surename": "Турсунова",
      "faculty": "Computer Science",
      "ielts": 6.5,
      "gpa": 3.8,
      "university": "Uzbekistan State University",
      "speciality": "Software Engineering"
    },
    {
      "name": "Дилшод",
      "surename": "Исмоилов",
      "faculty": "Law",
      "ielts": 6.0,
      "gpa": 3.5,
      "university": "Tashkent Law Institute",
      "speciality": "International Law"
    },
    {
      "name": "Зухра",
      "surename": "Норматова",
      "faculty": "Medicine",
      "ielts": 6.5,
      "gpa": 4.1,
      "university": "Tashkent Medical Academy",
      "speciality": "General Medicine"
    },
    {
      "name": "Бахромбек",
      "surename": "Юлдашев",
      "faculty": "Engineering",
      "ielts": 6.5,
      "gpa": 3.9,
      "university": "Karshi Engineering University",
      "speciality": "Mechanical Engineering"
    },
    {
      "name": "Шахзодбек",
      "surename": "Юсупов",
      "faculty": "Economics",
      "ielts": 6.0,
      "gpa": 3.7,
      "university": "National University of Uzbekistan",
      "speciality": "Finance"
    },
    {
      "name": "Умидбек",
      "surename": "Сайфуллаев",
      "faculty": "Computer Science",
      "ielts": 6.5,
      "gpa": 4.0,
      "university": "Samarkand State University",
      "speciality": "Data Science"
    },
    {
      "name": "Санжарбек",
      "surename": "Мирзахмедов",
      "faculty": "Architecture",
      "ielts": 5.5,
      "gpa": 3.6,
      "university": "Tashkent Institute of Architecture",
      "speciality": "Urban Design"
    },
    {
      "name": "Жахонгир",
      "surename": "Садуллаев",
      "faculty": "Computer Science",
      "ielts": 6.5,
      "gpa": 3.9,
      "university": "Andijan State University",
      "speciality": "Cybersecurity"
    },
    {
      "name": "Лазизбек",
      "surename": "Эргашев",
      "faculty": "Business Administration",
      "ielts": 7.0,
      "gpa": 4.3,
      "university": "Westminster International University in Tashkent",
      "speciality": "Entrepreneurship"
    },
    {
      "name": "Озода",
      "surename": "Файзуллаева",
      "faculty": "Law",
      "ielts": 6.0,
      "gpa": 3.4,
      "university": "National University of Uzbekistan",
      "speciality": "Criminal Law"
    },
    {
      "name": "Шахло",
      "surename": "Хамдамова",
      "faculty": "Linguistics",
      "ielts": 7.5,
      "gpa": 4.2,
      "university": "Bukhara State University",
      "speciality": "French Language Studies"
    },
    {
      "name": "Муниса",
      "surename": "Эргашева",
      "faculty": "Art and Design",
      "ielts": 5.5,
      "gpa": 3.8,
      "university": "Uzbek State Institute of Arts and Culture",
      "speciality": "Graphic Design"
    },
    {
      "name": "Ботирбек",
      "surename": "Алимов",
      "faculty": "Physics",
      "ielts": 6.0,
      "gpa": 3.5,
      "university": "Tashkent State Technical University",
      "speciality": "Nuclear Physics"
    },
    {
      "name": "Севинч",
      "surename": "Саидова",
      "faculty": "Education",
      "ielts": 6.5,
      "gpa": 3.7,
      "university": "Namangan State University",
      "speciality": "Elementary Education"
    },
    {
      "name": "Фаррух",
      "surename": "Шарипов",
      "faculty": "Biology",
      "ielts": 6.5,
      "gpa": 4.0,
      "university": "Tashkent State Pedagogical University",
      "speciality": "Genetics"
    },
    {
      "name": "Нодира",
      "surename": "Кадырова",
      "faculty": "Psychology",
      "ielts": 6.5,
      "gpa": 4.1,
      "university": "Samarkand State University",
      "speciality": "Clinical Psychology"
    },
    {
      "name": "Азамат",
      "surename": "Умаров",
      "faculty": "Environmental Science",
      "ielts": 6.0,
      "gpa": 3.6,
      "university": "Urgench State University",
      "speciality": "Sustainable Development"
    }
  ];

  // Extract unique faculties for the dropdown filter
  const uniqueFaculties = [...new Set(students.map(student => student.faculty))];

  const filteredStudents = students.filter((student) => {
    const query = searchQuery.toLowerCase();
    const matchesFaculty = facultyFilter ? student.faculty === facultyFilter : true;
    return (
      matchesFaculty &&
      (student.name.toLowerCase().includes(query) ||
        student.surename.toLowerCase().includes(query) ||
        student.faculty.toLowerCase().includes(query) ||
        student.ielts.toString().includes(query) ||
        student.gpa.toString().includes(query))
    );
  });


  return (
    <div className="main-uni">
      <div className="top-main-uni">
        <h2 className="glav">Главное</h2>
        <div className="right-top">
          <img className="harvard-img" src={harvard} alt="" />
          <div>
            <p className="har">Harvard University</p>
            <p className="bos">Boston, USA</p>
          </div>
        </div>
      </div>

      <div className="btn-cont">
        <button className="excel-btn">
          <img src={group} alt="" />
          Excel
        </button>
      </div>

      <form className="form" action="">
        <div className="search">
          <img className="src-icon" src={search} alt="" />
          <input
            type="search"
            className="search-input"
            placeholder="Поиск абитуриентов"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </form>

      {/* Student List */}
      <div className="student-list">
        <div className='list-top-part'>
          <h1 className="student-list-title">Список абитуриентов</h1>

          <select
            className="faculty-dropdown"
            value={facultyFilter}
            onChange={(e) => setFacultyFilter(e.target.value)}
          >
            <option value="">All Faculties</option>
            {uniqueFaculties.map((faculty, index) => (
              <option key={index} value={faculty}>
                {faculty}
              </option>
            ))}
          </select>
        </div>
        <div className="st-list-names h3h">
          <h3 className='h31'>ФИО</h3>
          <h3 className='h32'>Факультет</h3>
          <h3 className='h33'>IELTS</h3>
          <h3 className='h34'>GPA</h3>
          <h3 className='h35'>Принять</h3>
        </div>
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="student-item"
            style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0FAFF' }}
          >
            <span className="student-name">
              {student.name} {student.surename}
            </span>
            <span className="student-faculty">{student.faculty}</span>
            <span className="student-ielts">{student.ielts}</span>
            <span className="student-gpa">{student.gpa}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbStudents;
