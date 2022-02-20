import React from 'react';
import StyledAnswer from '../elements/StyledAnswer';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle'
import { XCircle } from '@styled-icons/bootstrap/XCircle'
import { nanoid } from 'nanoid'

export default function Choice(props) {
    
    
    
    return (
        <div className="choice__wrapper">
            <StyledAnswer 
            id={props.id} 
            className="choice__item" 
            onClick={() => props.selectAnswer(props.text, props.id)}
            style={props.style.style}>
                <span className="choice__text">{props.text}</span>
                {props.state === 3 && 
                    <div className="answer__icon">
                        <CheckCircle size="24px"  /> 
                        <XCircle size="24px" />
                    </div>
                }
            </StyledAnswer>
        </div>
    )
}