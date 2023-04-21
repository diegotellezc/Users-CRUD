import React from 'react'

const Header = ({ isShowedForm, setIsShowedForm }) => {
    const handleClickShowModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
    }
    

    return (
        <header>
            <h1>Usuarios</h1>

            <button onClick={handleClickShowModal} className='bg-primary-color text-white p-2 text-sm hover:bg-primary-color/90 transition-colors'><i className='bx bx-plus'></i> Crear nuevo usuario</button>
        
        </header>
    )
}

export default Header
