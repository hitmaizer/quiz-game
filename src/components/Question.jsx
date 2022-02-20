import React from 'react'
import StyledCard from '../elements/StyledCard'
import Choice from './Choice'
import { nanoid } from 'nanoid'


export default function Question(props) {

    const answerStyles = {
        selected: {
            border: "solid 2px transparent",
            backgroundColor: "#F9A826",
            color: "white",

        },

        unselected: {
            border: "solid 2px #6066D0CC",
            color: "#6066D0CC",
            
            
        },

        correct: {
            backgroundColor: "#60BF88",
            color: "#FFFFFF",
            border: "solid 2px transparent",
        },
        
        incorrect: {
            backgroundColor: "#EA8282",
            color: "#FFFFFF",
            border: "solid 2px transparent",
        }
    }

        
    const choiceElements = props.currentQuestion.allAnswers.map(item => {
        let obj = {}
        if(props.state === 1) {
            obj = (item === props.currentQuestion.userInput) ? {
                style: {...answerStyles.selected}
            } 
            : {
                style: {...answerStyles.unselected}
            }
        } else if (props.state === 3) {
            if (item === props.currentQuestion.capital || item === props.currentQuestion.country) {
                obj = {
                    style: {...answerStyles.correct}
                }
            } else if (item === props.currentQuestion.userInput) {
                obj = {
                    style: {...answerStyles.incorrect}
                }
            } else {
                obj = {
                    style: {...answerStyles.unselected}
                }
            }
        }

        console.log(props.state)
        
        return (
            <>
                <Choice 
                key={nanoid()} 
                text={item} 
                selectAnswer={props.selectAnswer} 
                id={nanoid()}
                style={obj}
                state={props.state}
                />
                
            </>
        )
    })
    
    return (
        <div className="question__container">
            <h1 className="game__title">Country Quiz</h1>
            <img src="images/undraw_adventure_4hum.svg" alt="" className="card__img" />
            <StyledCard>
                <h3 className="card__title">{props.currentQuestion.flag ? "What country is this flag from?" : `What is the capital of ${props.currentQuestion.name}?`}</h3>
                
                {props.state === 1 && 
                <img src={props.currentQuestion.flag} alt="" className="card__flag"/>
                }

                {props.state === 3 && 
                <img src={props.currentQuestion.flag} alt="" className="card__flag"/>
                }
                
                {props.state === 1 && <>
                    <div className="choices__wrapper flex-col">
                        {choiceElements}
                    </div>
                    <button className="next__btn" onClick={props.confirmQuestion} >
                        <span className="btn__text">Confirm Answer</span>    
                    </button>
                </>
                }

                {props.state === 3 && <>
                    <div className="choices__wrapper flex-col">
                        {choiceElements}
                    </div>
                    <button className="nextquestion__btn" onClick={props.nextQuestion} >
                        <span className="btn__text">Next</span>    
                    </button>
                </>}

               
                
                
            </StyledCard>
        </div>
    )
}