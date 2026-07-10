import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const HandleSubmit = () =>{
            axios.post("jsonplaceholder.typicode.com/posts", {
                title: "foo",
                body: "bar",
                userId: 1,
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        }

        const fetchData = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
                setPokemons(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
        HandleSubmit()

    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 text-center text-white">Pokemons</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {pokemons.map((pokemon, index) => (
                    <div key={index} className="box mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mt-2 text-white text-xl text-center">{pokemon.name}</h2>
                    </div>
                ))}
            </div>  
        </div>
    )
}

export default Pokemon