import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Users = () => {
    const [data, setData] = useState([])
    const [result, setResult] = useState([])
    const [text, setText] = useState("")
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState("")

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(response.data)
            console.log(response.data)
        }
        getData()
    }, [])

    const handleChange = (e) => {
        setText(e.target.value)
    }


    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return

        const newUser = {
            id: Date.now(),
            name: text
        }
        setData([...data, newUser])
        setText("")
    }

    const editUser = (userId) => {
        const user = data.find((u) => u.id === userId)
        console.log(user)
        if (!user) return
        setEditingId(userId)
        setEditText(user.name)
    }

    const saveUser = (userId) => {
        setData(data.map((u) => (u.id === userId ? { ...u, name: editText } : u)))
        setEditingId(null)
        setEditText("")
    }



    return (
        <div className='user '>
            <h1>Users</h1>
            <form action="/" onSubmit={handleSubmit}>
                <input type="text" className='border border-black my-5' value={text} onChange={handleChange} />
                <button>Click</button>
            </form>
            {data.map((user) => {
                return (
                    <div className='flex gap-3' key={user.id}>
                        {editingId === user.id ? (
                            <>
                                <input
                                    type="text"
                                    className='border border-black'
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => saveUser(user.id)} className='border border-pink-300 p-2 bg-green-400 rounded-2xl'>save</button>
                            </>
                        ) : (
                            <>
                                <p>{user.name}</p>
                                <button onClick={() => editUser(user.id)} className='border border-pink-300 p-2 bg-amber-400 rounded-2xl'>edit</button>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Users