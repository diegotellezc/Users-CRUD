import React from 'react'

const Header = ({ isShowedForm, setIsShowedForm }) => {
    const handleClickShowModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
    }
    

    return (
        <header className='bg-secondary-color w-full m-0 p-4 text-center flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between'>
            <h1 className='text-2xl text-white sm:ml-32'>Usuarios</h1>

            <button onClick={handleClickShowModal} className='bg-primary-color max-w-max rounded-md flex justify-center items-center text-white px-6 py-2 text-lg sm:mr-32 hover:bg-primary-color/90 transition-colors'>
                <i className='bx bx-plus text-2xl'></i> 
                Crear nuevo usuario
            </button>
        
        </header>
    )
}

export default Header
