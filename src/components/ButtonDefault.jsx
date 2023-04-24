import React from 'react'

const ButtonDefault = ({createDefaultUsers}) => {
    return (
        <div className='top-1/2 left-1/2 -translate-x-1/2 absolute'>
            <button onClick={createDefaultUsers} className="bg-primary-color max-w-max rounded-md flex justify-center items-center text-white px-6 py-4 text-lg hover:bg-primary-color/90 transition-colors">Crear usuarios por defecto</button>
        </div>
    )
}

export default ButtonDefault
