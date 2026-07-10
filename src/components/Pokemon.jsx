import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setPokemons(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()

    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 text-center text-white">Users</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className="box mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mt-2 text-amber-50 text-xl text-center">{pokemon.name}</h2>
                        <p className="text-gray-700 mt-2 text-center">{pokemon.email}</p>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-white mt-2 text-center font-bold">{pokemon.username}</p>
                            <p className="text-yellow-500 mt-2 text-center">Phone: {pokemon.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pokemon