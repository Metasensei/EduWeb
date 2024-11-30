import React, { useState } from "react";
import admin from "../Admin/images/admin.png";
import "../Admin/AdminUniver.css";
import usta from "../Admin/images/filtr.png";
import und from '../Admin/images/sor.png'


const AdminStudent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };
    const [selectedUni, setSelectedUni] = useState(null);

    const openModal = (uni) => {
        setSelectedUni(uni);
    };
    
    const closeModal = () => {
        setSelectedUni(null);
    };
    
    
    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const universities = [
        { id: 1, name: "Akdeniz Universiteti (Turkiya)", city: "Antinyi", date: "31.01.2012", status: "Прием документов", kartClass: "kart1" },
        { id: 2, name: "Akdeniz Universiteti (Angliya)", city: "Atinnyi", date: "31.01.2012", status: "Прием документов", kartClass: "kart2" },
        { id: 3, name: "Akdeniz Universiteti (Palstin)", city: "Natiniy", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart3" },
        { id: 4, name: "Akdeniz Universiteti (Rassiya)", city: "Natiyni", date: "31.01.2012", status: "Прием документов", kartClass: "kart4" },
        { id: 5, name: "Akdeniz Universiteti (Fargona)", city: "Nantiyi", date: "31.01.2012", status: "Прием документов", kartClass: "kart5" },
        { id: 6, name: "Akdeniz Universiteti (Andijon)", city: "Iyitnan", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart6" },
        { id: 7, name: "Akdeniz Universiteti (Buxoroo)", city: "Iytinan", date: "31.01.2012", status: "Прием документов", kartClass: "kart7" },
    ];

    const filteredUniversities = universities.filter((uni) =>
        uni.city.toLowerCase().includes(searchTerm) || uni.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="adminuniver">
            <nav>
                <h1>Университеты</h1>
                <span>
                    <img src={admin} className="admin" alt="" />
                    Nargiza Akhmedova
                </span>
            </nav>

            <div className="vpn">
                <input
                    placeholder="Поиск университетов"
                    type="text"
                    className="admin-src"
                    onChange={handleSearchChange}
                />
                <div className="hull" onClick={toggleFilter}>
                    <img src={usta} className="usta" alt="" />
                </div>
            </div>

            <div className="idk">
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
                            <img src={und} alt="" className="sor" />
                        </div>
                    ))
                ) : (
                    <h1 className="no-results kilo">Brat bunde universitet topilmadi adashmasdan yozin iltimos</h1>
                )}
            </div>
            

            {/* Filter Panel */}
            {isFilterVisible && (
                <>
                    <div className="filter-overlay" onClick={toggleFilter}></div>
                    <div className="filter-panel">
                        
                       <h1 className="texfltr">Фильтры</h1>
                        
                        <div className="moon">
                            <h5 className="sun">Выберите период</h5>
                            <div className="snm">
                            <input type="date" name="" className="husan" />
                            <input type="date" name="" className="hasan"/>
                            </div>
                        </div>
                        <h4 className="lol">Выберите страну</h4>
                       <select name="Турция" className="bilmima">
                        <option value="Турция">Турция</option>
                        <option value="Turkiya">Turkiya</option>
                       </select>
                       <h4 className="lol">Выберите город</h4>
                       <select name="tursiya" className="bilmima">
                        <option value="Анталия">Анталия</option>
                        <option value="Free palastine">Free palastine</option>
                       </select>

                       <input type="button"  value="Применить" className="sunny" />
                    </div>
                </>
                
            )}
        </div>
    );
};

export default AdminStudent;
