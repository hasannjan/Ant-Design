import React from 'react'
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Button } from 'antd';
import cards from './cards.json'


function Cards(props) {
    const { Meta } = Card;
    
    return (
        
        <div className="cards">
            {cards.map((cardsDetail, index) => {
                return <div className="max-width">
                    <img src={cardsDetail.src}/>
                    <h1>{cardsDetail.name}</h1>
                    <p>{cardsDetail.category}</p>
                    </div>
            })}
        </div>
        
    )
}

export default Cards