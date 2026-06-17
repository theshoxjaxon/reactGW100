import React from 'react'
const CUSTOMERS = [
    { id: 1, code: "ALFKI", name: "Alfreds Futterkiste", contact: "Maria Anders", role: "Sales Representative", city: "Berlin", country: "Germany" },
    { id: 2, code: "ANATR", name: "Ana Trujillo Emparedados", contact: "Ana Trujillo", role: "Owner", city: "México D.F.", country: "Mexico" },
    { id: 3, code: "ANTON", name: "Antonio Moreno Taquería", contact: "Antonio Moreno", role: "Owner", city: "México D.F.", country: "Mexico" },
    { id: 4, code: "AROUT", name: "Around the Horn", contact: "Thomas Hardy", role: "Sales Representative", city: "London", country: "UK" },
    { id: 5, code: "BERGS", name: "Berglunds snabbköp", contact: "Christina Berglund", role: "Order Administrator", city: "Luleå", country: "Sweden" },
    { id: 6, code: "BLAUS", name: "Blauer See Delikatessen", contact: "Hanna Moos", role: "Sales Representative", city: "Mannheim", country: "Germany" },
    { id: 7, code: "BLONP", name: "Blondesddsl père et fils", contact: "Frédérique Citeaux", role: "Marketing Manager", city: "Strasbourg", country: "France" },
    { id: 8, code: "BOLID", name: "Bólido Comidas preparadas", contact: "Martín Sommer", role: "Owner", city: "Madrid", country: "Spain" },
    { id: 9, code: "BONAP", name: "Bon app'", contact: "Laurence Lebihan", role: "Owner", city: "Marseille", country: "France" },
    { id: 10, code: "BOTTM", name: "Bottom-Dollar Markets", contact: "Elizabeth Lincoln", role: "Accounting Manager", city: "Tsawassen", country: "Canada" },
    { id: 11, code: "BSBEV", name: "B's Beverages", contact: "Victoria Ashworth", role: "Sales Representative", city: "London", country: "UK" },
    { id: 12, code: "CACTU", name: "Cactus Comidas para llevar", contact: "Patricio Simpson", role: "Sales Agent", city: "Buenos Aires", country: "Argentina" },
    { id: 13, code: "CENTC", name: "Centro comercial Moctezuma", contact: "Francisco Chang", role: "Marketing Manager", city: "México D.F.", country: "Mexico" },
    { id: 14, code: "CHOPS", name: "Chop-suey Chinese", contact: "Yang Wang", role: "Owner", city: "Bern", country: "Switzerland" },
    { id: 15, code: "COMMI", name: "Comércio Mineiro", contact: "Pedro Afonso", role: "Sales Associate", city: "São Paulo", country: "Brazil" },
    { id: 16, code: "CONSH", name: "Consolidated Holdings", contact: "Elizabeth Brown", role: "Sales Representative", city: "London", country: "UK" },
    { id: 17, code: "DRACD", name: "Drachenblut Delikatessen", contact: "Sven Ottlieb", role: "Order Administrator", city: "Aachen", country: "Germany" },
    { id: 18, code: "DUMON", name: "Du monde entier", contact: "Janine Labrune", role: "Owner", city: "Nantes", country: "France" },
];
const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {CUSTOMERS.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.code}</td>
                            <td>{customer.name}</td>
                            <td>{customer.contact}</td>
                            <td>{customer.role}</td>
                            <td>{customer.city}</td>
                            <td>{customer.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Profile