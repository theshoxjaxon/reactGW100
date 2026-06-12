import React from 'react'

const Box = ({ text }) => {
    return (
        <div className='w-40 h-40 bg-red-500'>
            <h1 className='text-2xl text-green-400'>{text}</h1>
        </div>
    )
}

export default Box