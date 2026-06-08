import React from 'react'
import { useState } from 'react'


const Card = () => {


    const [like, setLike] = useState(0)

    const likeIncrease = () => {
        setLike(like + 1)
    }

    const changeBg = () => {
        document.body.style.backgroundColor = "red"

    }
    return (
        <div>
            <div>
                <h1>Posts</h1>
                <p>Bu Oddiy Post</p>
                <button onClick={likeIncrease}>❤️ Likelar <p>{like}</p> </button>
                <button onClick={changeBg}>Change Collort</button>
            </div>
        </div>
    )
}

export default Card