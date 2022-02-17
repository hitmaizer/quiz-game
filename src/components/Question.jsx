import React from 'react'
import StyledCard from '../scss/elements/StyledCard'

export default function Question() {
    return (
        <div className="question__container">
            <h1 className="game__title">Country Quiz</h1>
            <img src="images/undraw_adventure_4hum.svg" alt="" />
            <StyledCard>
                <h3 className="card__title">Kuala Lumpur is the capital of</h3>
                
            </StyledCard>
        </div>
    )
}