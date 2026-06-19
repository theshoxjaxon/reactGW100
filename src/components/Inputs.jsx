import React from 'react'
import { useState } from 'react'

const Inputs = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        agreed: false
    })
    const [list, setList] = useState([])

    function handleChange(e) {
        const { name, type, checked, value } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, form])
        setForm({ name: "", surname: "", email: "", agreed: false })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Ismingiz Nima:</label>
                <input className='border' type="text" name='name' value={form.name} onChange={handleChange} />

                <label>Familyangiz Nima:</label>
                <input className='border' type="text" name='surname' value={form.surname} onChange={handleChange} />

                <label>Emailingiz Nima:</label>
                <input className='border' type="email" name='email' value={form.email} onChange={handleChange} />

                <label>Rozimisiz:</label>

                <input type="checkbox" name='agreed' checked={form.agreed} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            <table>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.email}</td>
                            <td>{item.agreed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Inputs