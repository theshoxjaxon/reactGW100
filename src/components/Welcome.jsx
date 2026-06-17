import React from 'react'

const Welcome = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <h1>Xush Kelibsiz</h1> : <h1>Brat Paroliz notog'ri</h1>}
        </div>
    )
}

export default Welcome