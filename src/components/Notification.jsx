import React from 'react'

const Notification = ({ notificaton }) => {
    return (
        <div>
            {notificaton.length > 0 && notificaton ? <h1>Xa xabar bor va u tog'ri</h1> : <h1>Notog'ri malumon</h1>}
        </div>

    )
}

export default Notification