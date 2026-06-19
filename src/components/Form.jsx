import React from 'react'
import { useState } from 'react'
const Form = () => {
    // const [agreed, setAgreed] = useState(false)
    const [country, setCountry] = useState("O'zbekiston")
    return (
        <div>
            <h1>{country}</h1>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="Thailand">Thailand</option>
                <option value="UAE">UAE</option>
                <option value="Shvetsariya">Shvetsariya</option>


            </select>
        </div>
        // <div>
        //     <h1>{agreed ? "true" : "false"}</h1>
        //     <input type="checkbox" checked={agreed}
        //         onChange={(e) => setAgreed(e.target.checked)} />
        // </div>
    )
}

export default Form