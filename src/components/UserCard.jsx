import React from 'react'

const UserCard = ({ user }) => {
    console.log(user)
    return (
        <article>
            <div>
                <img src={user.image_url} alt="" />
            </div>

            <h2>{`${user.first_name}  ${user.last_name}`}</h2>
            <ul>
                <li>Correo: {user.email}</li>
                <li></li>
                <li></li>
            </ul>
        </article>
    )
}

export default UserCard
