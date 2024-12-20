import React, { useState } from "react";
import admin from "../Admin/images/admin.png";
import "../Admin/AdminUniver.css";
import und from '../Admin/images/sor.png';
import '../Student/StudentUni.css'


const StudentUni = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [selectedUni, setSelectedUni] = useState(null); // Modal uchun state

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };  

    // Universitet ma'lumotlari
    const universities = [
        { id: 1, name: "Akdeniz Universiteti (Turkiya)", city: "Turkiya", date: "31.01.2012", status: "Прием документов", kartClass: "kart1" },
        { id: 2, name: "Akdeniz Universiteti (Angliya)", city: "Angliya", date: "31.01.2012", status: "Прием документов", kartClass: "kart2" },
        { id: 3, name: "Akdeniz Universiteti (Palstin)", city: "Palstin", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart3" },
        { id: 4, name: "Akdeniz Universiteti (Rassiya)", city: "Rassiya", date: "31.01.2012", status: "Прием документов", kartClass: "kart4" },
        { id: 5, name: "Akdeniz Universiteti (Fargona)", city: "Fargona", date: "31.01.2012", status: "Прием документов", kartClass: "kart5" },
        { id: 6, name: "Akdeniz Universiteti (Andijon)", city: "Andijon", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart6" },
        { id: 7, name: "Akdeniz Universiteti (Buxoroo)", city: "Buxoroo", date: "31.01.2012", status: "Прием документов", kartClass: "kart7" },
    ];

    // Qidiruv filtrini qo'llash
    const filteredUniversities = universities.filter((uni) =>
        uni.city.toLowerCase().includes(searchTerm) || uni.name.toLowerCase().includes(searchTerm)
    );

    // Modalni ochish
    const openModal = (uni) => {
        setSelectedUni(uni);
    };

    // Modalni yopish
    const closeModal = () => {
        setSelectedUni(null);
    };

    return (
        <div className="adminuniver">
            <nav>
                <h1>Университеты</h1>
                <span>
                    <img src={admin} className="admin" alt="" />
                    Nargiza Akhmedova
                </span>
            </nav>

            
            

            <div className="idk idk2">
                <div className="page2">
                    <h1 className="tage1">Название</h1>
                    <h1 className="tage2">Город</h1>
                    <h1 className="tage3">Срок</h1>
                    <h1 className="tage4">Статус</h1>
                    <h1 className="tage5">Информация</h1>
                </div>

                {filteredUniversities.length > 0 ? (
                    filteredUniversities.map((uni) => (
                        <div key={uni.id} className={uni.kartClass}>
                            <h1 className="f1">{uni.name}</h1>
                            <h1 className="f2">{uni.city}</h1>
                            <h1 className="f3">{uni.date}</h1>
                            <h1 className="f4">{uni.status}</h1>
                            <img
                                src={und}
                                alt="sor icon"
                                className="sor"
                                onClick={() => openModal(uni)} // Endi faqat rasm bosilganda modal ochiladi
                            />
                        </div>
                    ))
                ) : (
                    <h1 className="no-results kilo">Brat bunde universitet topilmadi adashmasdan yozin iltimos</h1>
                )}
            </div>
                
            {/* Modal oynasi */}
            {selectedUni && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Modal ichida bosish modalni yopmaydi
                    >
                       <div className="wrapper">
        <div className="header">
          
          <div className="h-img"><img src="" alt="" />
          </div>
          
        </div>
          <div className="body">
            <div className="b-img"><img src="https://img.freepik.com/free-vector/waiting-concept-illustration_114360-5971.jpg?q=10&h=200" alt="" /></div>
            
            <div className="siu">
                <h4>Ваша заявка была отправлена университету. <br /> Ждём ответа </h4>
            <h5>
                Примерное время ожидания:{''} <span style={{color: 'rgb(115, 0, 255)'}}>2 недели
                    </span></h5>
            </div>
          </div>
      </div>
                    </div>
                </div>
            )}

            {/* Filter Panel */}
            {isFilterVisible && (
                <>
                    <div className="filter-overlay" onClick={toggleFilter}></div>
                    <div className="filter-panel">
                        <h1 className="texfltr">Фильтры</h1>
                        <div className="moon">
                            <h5 className="sun">Выберите период</h5>
                            <div className="snm">
                                <input type="date" className="husan" />
                                <input type="date" className="hasan" />
                            </div>
                        </div>
                        <h4 className="lol">Выберите страну</h4>
                        <select className="bilmima">
                            <option value="Турция">Турция</option>
                            <option value="Turkiya">Turkiya</option>
                        </select>
                        <h4 className="lol">Выберите город</h4>
                        <select className="bilmima">
                            <option value="Анталия">Анталия</option>
                            <option value="Free palastine">Free palastine</option>
                        </select>
                        <input type="button" value="Применить" className="sunny" />
                    </div>
                </>
            )}
        </div>
    );
};


export default StudentUni;