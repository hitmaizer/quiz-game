import React from 'react';
import StyledAnswer from '../elements/StyledAnswer';


export default function Choice(props) {
    
    
    
    return (
        <div className="choice__wrapper">
            <StyledAnswer 
            id={props.id} 
            className="choice__item" 
            onClick={() => props.selectAnswer(props.text, props.id)}
            style={props.style.style}>
                <span className="choice__text">{props.text}</span>
            </StyledAnswer>
        </div>
    )
}