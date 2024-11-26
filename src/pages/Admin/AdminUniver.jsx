import React from 'react'
import admin from '../Admin/images/admin.png'
import '../Admin/AdminUniver.css'
const AdminUniver = () => {
    return (
        <>
            <div className="adminuniver">
                <nav>
                    <h1>Университеты</h1>
                    <p><img src={admin} alt="" />Nargiza Akhmedova</p>
                </nav>

                <input placeholder='Поиск университетов' type="text" name="" className='admin-src search' />

                <div className='search idk'>

                    <div className='page1'>
                        <h1 className='h1'>Название</h1>
                        <h1 className='h2'>Город</h1>
                        <h1 className='h3'>Срок</h1>
                        <h1 className='h4'>Статус</h1>
                        <h1 className='h5'>Информация</h1>
                    </div>

                    <div className='page2'>
                        <h1 className='turk'>Akdeniz Universiteti (Turkiya)</h1>
                        <h1 className='ant'>Antaliya</h1>
                        <h1 className='datr'>31.01.2012</h1>
                        
                    </div>





                </div>

            </div>
        </>
    )
}

export default AdminUniver