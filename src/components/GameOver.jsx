import React from 'react';
import StyledCard from '../elements/StyledCard'

export default function GameOver(props) {
    return (
        <StyledCard className="gameover__wrapper">
            <img src="images/undraw_winners_ao2o.svg" alt="winner" className="gameover__img" />
            <h1 className="gameover__title">Game Over!</h1>
            <h5 className="gameover__text">You got <span className="results__txt">{props.result}</span> answers right!</h5>
            <button className="gameover__btn" onClick={props.resetGame}>
                <span className="nextbtn__text">Try again</span>
            </button>
        </StyledCard>
    )
}