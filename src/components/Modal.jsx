import React from 'react'

const Modal = ({ isShowedForm, setIsShowedForm, register, handleSubmit, submit }) => {
    const handleClickCloseModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
    }
    


    return (
        <section className={`absolute top-0 left-0 bottom-0 right-0 bg-red flex bg-black/40 justify-center items-center transition-opacity ${isShowedForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 w-[300px] relative'>

                <h3 className='text-2xl font-bold'>Nuevo usuario</h3>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="first_name">Nombres</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='first_name' type="text" {...register("first_name")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="last_name">Apellidos</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='last_name' type="text" {...register("last_name")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="email">Correo</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='email' type="email" {...register("email")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="password">Contraseña</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='password' type="password" {...register("password")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="birthday">Cumpleaños</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='birthday' type="date" {...register("birthday")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="image_url">URL de la imagen</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='image_url' type="text" {...register("image_url")} />
                </div>

                <i onClick={handleClickCloseModal} className='bx bx-x absolute right-2 top-1 text-2xl hover:text-red-500 cursor-pointer'></i>

                <button className='bg-primary-color text-white p-2 text-sm hover:bg-primary-color/90 transition-colors'>Agregar nuevo usuario</button>
            </form>
        
        </section>
    )
}

export default Modal
