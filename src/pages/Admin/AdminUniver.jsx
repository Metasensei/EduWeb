import React, { useState } from "react";
import admin from "../Admin/images/admin.png";
import "../Admin/AdminUniver.css";
import usta from "../Admin/images/filtr.png";
import und from '../Admin/images/sor.png';
import downno from '../Admin/images/download.png'

const AdminStudent = () => {
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
                        
                        <nav>
                <h1>Университеты / Akdeniz Universiteti (Turkiya)</h1>
                <span>
                    <img src={admin} className="admin" alt="" />
                    Nargiza Akhmedova
                </span>
            </nav>

            <div className="idk2">
                <div className="stage1">
                    <h1 className="xp1">Имя</h1>
                    <h1 className="fx1">Нафиса</h1>
                </div>

                <div className="stage2">
                    <h1 className="m1">Фамилия</h1>
                    <h1 className="m2">Абдураимова</h1>
                </div>

                <div className="stage3">
                    <h1 className="st1">Отчество</h1>
                    <h1 className="st2">Зафар кизи</h1>
                </div>

                <div className="stage5">
                    <h1 className="np1">Университет</h1>
                    <h1 className="np2">Омская гуманитарная академия</h1>
                </div>

                <div className="stage6">
                    <h1 className="we1">Факультет</h1>
                    <h1 className="we2">Педагогическое образование (с двумя профилями подготовки) (уровень <br /> бакалавриата))
                    </h1>
                </div>

                <div className="stage7">
                    <h1 className="win1">Специальность</h1>
                    <h1 className="win2">Начальное образование и иностранный язык (английский язык</h1>
                </div>

                <div className="stage8">
                    <h1 className="pass">Паспорт</h1>
                    <img src={downno} className="pass1" alt="" />
                </div>

                <div className="stage9">
                    <h1 className="din1">Диплом</h1>
                    <img src={downno} className="win1" alt="" />
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

export default AdminStudent;
