import React from 'react';
import StyledCard from '../elements/StyledCard'

export default function Intro(props) {
    return (
        <>
            <h1 className="game__title">Country Quiz</h1>
            <StyledCard className="intro__wrapper flex-col">
                <h3 className="intro__header">Welcome to the Country Quiz! Answer correctly and see how many in a row you can get!</h3>
                <button className="gamepicker__btn" onClick={props.getCapital}>
                    <span className="btn__text">Start Game</span>
                </button>
            </StyledCard>
        </>
    )
}