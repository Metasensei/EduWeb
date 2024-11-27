import React, { useState } from "react";
import admin from "../Admin/images/admin.png";
import "../Admin/AdminUniver.css";
import usta from "../Admin/images/filtr.png";
import und from "../Admin/images/sor.png";

const AdminUniver = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const closeFilter = () => {
        setIsFilterVisible(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const universities = [
        { id: 1, name: "Akdeniz Universiteti (Turkiya)", city: "Turkiya", date: "31.01.2012", status: "Прием документов", kartClass: "kart1" },
        { id: 2, name: "Akdeniz Universiteti (Angliya)", city: "Angliya", date: "31.01.2012", status: "Прием документов", kartClass: "kart2" },
        { id: 3, name: "Akdeniz Universiteti (Palstin)", city: "Palstin", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart3" },
        { id: 4, name: "Akdeniz Universiteti (Rassiya)", city: "Rassiya", date: "31.01.2012", status: "Прием документов", kartClass: "kart4" },
        { id: 5, name: "Akdeniz Universiteti (Fargona)", city: "Fargona", date: "31.01.2012", status: "Прием документов", kartClass: "kart5" },
        { id: 6, name: "Akdeniz Universiteti (Andijon)", city: "Andijon", date: "31.01.2012", status: "Прием закрыт", kartClass: "kart6" },
        { id: 7, name: "Akdeniz Universiteti (Buxoroo)", city: "Buxoroo", date: "31.01.2012", status: "Прием документов", kartClass: "kart7" },
    ];

    // Filtrlangan kartalar
    const filteredUniversities = universities.filter((uni) =>
        uni.city.toLowerCase().includes(searchTerm) || uni.name.toLowerCase().includes(searchTerm)
    );

    return (
        <>

        
            <div className="adminuniver">
                <nav>
                    <h1>Университеты</h1>
                    <p>
                        <img src={admin} className="admin" alt="" />
                        Nargiza Akhmedova
                    </p>
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

                {isFilterVisible && (
                    <>
                        <div className="overlay" onClick={closeFilter}></div>
                        <div className="filter-modal">
                            <h3>Фильтр</h3>
                            <label>
                                <span>Выберите период:</span>
                                <input type="date" />
                                <input type="date" />
                            </label>
                            <label>
                                <span>Выберите страну:</span>
                                <select>
                                    <option>Турция</option>
                                    <option>Узбекистан</option>
                                </select>
                            </label>
                            <label>
                                <span>Выберите город:</span>
                                <select>
                                    <option>Анталия</option>
                                    <option>Ташкент</option>
                                </select>
                            </label>
                            <button onClick={closeFilter}>Применить</button>
                        </div>
                    </>
                )}

                <div className="idk">
                    <div className="page1">
                        <h1 className="h1">Название</h1>
                        <h1 className="h2">Город</h1>
                        <h1 className="h3">Срок</h1>
                        <h1 className="h4">Статус</h1>
                        <h1 className="h5">Информация</h1>
                    </div>

                    {filteredUniversities.map((uni) => (
                        <div key={uni.id} className={uni.kartClass}>
                            <h1 className="turk">{uni.name}</h1>
                            <h1 className="ant">{uni.city}</h1>
                            <h1 className="datr">{uni.date}</h1>
                            <h1 className={uni.status === "Прием закрыт" ? "light1" : "light"}>
                                {uni.status}
                            </h1>
                            <img src={und} className="uno" alt="" />
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminUniver;
