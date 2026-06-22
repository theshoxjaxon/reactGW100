import React from 'react'
import { useState } from 'react'

const Inputs = () => {


    return (
        <div>
            <form >
                <label>Ismingiz Nima:</label>
                <input className='border' type="text" />

                <label>Familyangiz Nima:</label>
                <input className='border' type="text" />

                <label>Emailingiz Nima:</label>
                <input className='border' type="email" />

                <label>Rozimisiz:</label>

                <input type="checkbox" />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Inputs