import React from 'react'
import { useEffect, useState } from 'react'

const Box = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setData(data)
            console.log(data)

        }
        fetchData()
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {data.map((item) => (
                <div key={item.id} className="box  mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                    <img src={item.image} alt={item.title} width="100%" height="200px" />
                    <h2 className="text-lg font-semibold mt-2 text-amber-50 text-xl text-center">{item.title}</h2>
                    <p className="text-gray-700 mt-2 text-center">{item.description}</p>
                    <div className="flex  items-center justify-between mt-2">
                        <p className="text-white mt-2 text-center font-bold">${item.price}</p>
                        <p className="text-yellow-500 mt-2 text-center">Rating: {item.rating.rate} ({item.rating.count})</p>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default Box