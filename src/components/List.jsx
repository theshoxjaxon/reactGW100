import React from 'react'




const List = () => {

    const mevalar = [

        { name: "olma", id: 1 },
        { name: "uzum", id: 2 },
        { name: "gilos", id: 3 },
        { name: "shaftoli", id: 4 },
        { name: "banan", id: 5 }

    ]

    const meva = mevalar.map(meva => <li key={meva.id}>{meva.name}</li>)


    return (
        <ol>{meva}</ol>
    )
}

export default List