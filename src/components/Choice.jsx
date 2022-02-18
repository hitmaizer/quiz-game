import React from 'react';
import StyledAnswer from '../elements/StyledAnswer';

export default function Choice(props) {
    

    return (
        <div className="choice__wrapper">
            <StyledAnswer className="choice__item" onClick={() => props.selectAnswer(props.text)}>
                <span className="choice__text">{props.text}</span>
            </StyledAnswer>
        </div>
    )
}