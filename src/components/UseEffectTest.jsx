import React from 'react'
import { useEffect, useState } from 'react'



const UseEffectTest = () => {
    const [userName, setUserName] = useState("Yuklanmoqda....")
    useEffect(() => {

        setTimeout(() => {
            setUserName("Tursinali Mamatqulov Teshaboy Og'li")
        }, 2000)
    })

    return (
        <div>
            <h1>Foydalanuvchi Ismi {userName}</h1>
        </div>
    )
}

export default UseEffectTest