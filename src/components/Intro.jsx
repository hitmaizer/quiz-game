import React from 'react';
import StyledCard from '../elements/StyledCard'

export default function Intro(props) {
    return (
        <>
            <h1 className="game__title">Country Quiz</h1>
            <StyledCard className="intro__wrapper flex-col">
                <button className="gamepicker__btn" onClick={props.getFlag}>
                    <span className="btn__text">Flag Game</span>
                </button>
                <button className="gamepicker__btn" onClick={props.getCapital}>
                    <span className="btn__text">Capitals Game</span>
                </button>
            </StyledCard>
        </>
    )
}