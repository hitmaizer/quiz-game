import React from 'react'
import StyledCard from '../elements/StyledCard'
import Choice from './Choice'

export default function Question(props) {
    return (
        <div className="question__container">
            <h1 className="game__title">Country Quiz</h1>
            <img src="images/undraw_adventure_4hum.svg" alt="" className="card__img" />
            <StyledCard>
                <h3 className="card__title">{props.state === 1 ? "What country is this flag from?" : "test"}</h3>
                
                {props.state === 1 && 
                <img src={props.currentQuestion.flag} alt=""/>}
                <div className="choices__wrapper flex-col">
                    <Choice currentQuestion={props.currentQuestion}/>
                    <Choice currentQuestion={props.currentQuestion}/>
                    <Choice currentQuestion={props.currentQuestion}/>
                    <Choice currentQuestion={props.currentQuestion}/>
                </div>
                <button className="next__btn">
                    <span className="btn__text">Next</span>    
                </button>
            </StyledCard>
        </div>
    )
}