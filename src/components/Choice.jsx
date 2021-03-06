import React from 'react';
import StyledAnswer from '../elements/StyledAnswer';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle'
import { XCircle } from '@styled-icons/bootstrap/XCircle'


export default function Choice(props) {
    
    
    
    return (
        <div className="choice__wrapper">
            <StyledAnswer 
            id={props.id} 
            className="choice__item" 
            onClick={() => props.selectAnswer(props.text, props.id)}
            style={props.style.style}>
                <p className="choice__text">{props.text}</p>
                {props.state === 3 && (props.currentQuestion.userInput === props.text || (props.currentQuestion.capital || props.currentQuestion.country) === props.text) &&
                    <div className="answer__icon">
                        {props.text === (props.currentQuestion.capital ||  props.currentQuestion.country) && props.currentQuestion.userInput ? 
                        <CheckCircle size="24px"  /> :
                        <XCircle size="24px" />
                    }

                    
                         
                        
                    </div>
                }
            </StyledAnswer>
        </div>
    )
}