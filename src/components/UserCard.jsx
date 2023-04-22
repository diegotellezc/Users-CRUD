import React from 'react'

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
    return (
        <article>
            <div>
                <img className='w-[100px] aspect-[3/4] object-cover mx-auto rounded-md' src={ user.image_url ? user.image_url : "./images/no-image-available.png"} alt="User image" />
            </div>

            <h2>{`${user.first_name}  ${user.last_name}`}</h2>

            <ul>
                <li>
                    <h4>Correo:</h4> 
                    <span>{user.email}</span>
                </li>
                <li>
                    <h4>Cumpleaños:</h4> 
                    <span><i className='bx bxs-gift'></i> {user.birthday}</span>
                </li>
            </ul>

            <div>
                <button onClick={() => deleteUser(user.id)}>
                    <i className='bx bxs-trash'></i>
                </button>

                <button onClick={() => handleClickEdit(user)}>
                    <i className='bx bxs-pencil'></i>
                </button>
            </div>
        </article>
    )
}

export default UserCard
