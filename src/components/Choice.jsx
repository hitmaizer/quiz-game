import React from 'react';
import StyledAnswer from '../elements/StyledAnswer';

export default function Choice(props) {
    return (
        <div className="choice__wrapper">
            <StyledAnswer>
                <span className="choice__order">A</span>
                <span className="choice__text">{props.currentQuestion.country}</span>
            </StyledAnswer>
        </div>
    )
}