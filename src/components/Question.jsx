import React from 'react'
import StyledCard from '../elements/StyledCard'
import Choice from './Choice'

export default function Question() {
    return (
        <div className="question__container">
            <h1 className="game__title">Country Quiz</h1>
            <img src="images/undraw_adventure_4hum.svg" alt="" className="card__img" />
            <StyledCard>
                <h3 className="card__title">Kuala Lumpur is the capital of</h3>
                <div className="choices__wrapper flex-col">
                    <Choice />
                    <Choice />
                    <Choice />
                    <Choice />
                </div>
                <button className="next__btn">
                    <span className="btn__text">Next</span>    
                </button>
            </StyledCard>
        </div>
    )
}