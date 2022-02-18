import React from 'react'
import StyledCard from '../elements/StyledCard'
import Choice from './Choice'
import { nanoid } from 'nanoid'


export default function Question(props) {

    
    
    const choiceElements = props.currentQuestion.allAnswers.map(item => <Choice key={nanoid()} text={item} selectAnswer={props.selectAnswer} id={nanoid()}/>)
    
    return (
        <div className="question__container">
            <h1 className="game__title">Country Quiz</h1>
            <img src="images/undraw_adventure_4hum.svg" alt="" className="card__img" />
            <StyledCard>
                <h3 className="card__title">{props.state === 1 ? "What country is this flag from?" : "test"}</h3>
                
                {props.state === 1 && 
                <img src={props.currentQuestion.flag} alt="" className="card__flag"/>}
                <div className="choices__wrapper flex-col">
                    {choiceElements}
                    
                </div>
                <button className="next__btn" >
                    <span className="btn__text">Next</span>    
                </button>
            </StyledCard>
        </div>
    )
}