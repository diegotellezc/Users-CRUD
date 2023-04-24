import React, { useState } from 'react'

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
    const [showButtons, setShowButtons] = useState(false);

    const showingButtons = () => {
        setShowButtons(true);
    };

    const hidingButtons = () => {
        setShowButtons(false);
    };


    return (
        <article className="relative rounded-lg bg-white shadow-md p-4 w-[300px] h-[400px] border-[1px] border-transparent hover:border-primary-color hover:shadow-2xl"
        onMouseEnter={showingButtons}
        onMouseLeave={hidingButtons}
        >
            <img
                src={ user.image_url ? user.image_url : "./images/no-image-available.jpeg"} alt="User image"
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                showButtons ? "opacity-50" : "opacity-100"
                }`}
            />

            <div
                className={`${
                showButtons ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center`}
            >
                <div className="flex flex-col justify-center gap-3 text-xl">
                    <button onClick={() => handleClickEdit(user)}
                    className="bg-secondary-color text-white rounded-md px-4 py-2 mr-2 w-32 hover:bg-white hover:text-secondary-color hover:shadow-md hover:shadow-secondary-color">
                        Editar
                    </button>
                    <button onClick={() => deleteUser(user.id)}
                    className="bg-primary-color text-white rounded-md px-4 py-2 w-32 hover:bg-white hover:text-primary-color hover:shadow-sm hover:shadow-primary-color">
                        Eliminar
                    </button>
                </div>
            </div>

            <div
                className={`${
                showButtons ? "opacity-20" : "opacity-100"
                } transition-opacity duration-300 absolute bottom-0 left-0 w-full px-3 py-2 bg-white rounded-b-lg`}
            >
                <h2 className="text-lg font-bold my-2 text-center ">
                {`${user.first_name}  ${user.last_name}`}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                <strong>Correo:</strong> {user.email}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                <strong>Cumpleaños: </strong>{user.birthday}
                </p>
            </div>
        </article>
    )
}

export default UserCard
