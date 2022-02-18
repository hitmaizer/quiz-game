import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Question from './components/Question';
import Data from './data.json'
import FlagQuestions from './flagquestions.json'
import Intro from './components/Intro';
import GameOver from './components/GameOver'


export default function App() {
    const [gameState, setGameState] = React.useState(2)
    const [allData, setAllData] = React.useState([])
    const [flagQuestions, setFlagQuestions] = React.useState([])
    const [result, setResult] = React.useState(0)
    const [currentQuestion, setCurrentQuestion] = React.useState({
        flag: "",
        country: "",
        allAnswers: [],
        
    })

    React.useEffect(() => {
        setFlagQuestions(FlagQuestions)
        
        const selectedData = Data.map(item => {
            return {
                name: item.name, 
                capital: item.capital, 
                region: item.region
            }
        })
        
        setAllData(selectedData)
        
    }, [flagQuestions])

    function shuffle(oldAnswers) {
        let array = oldAnswers
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    
    function getCapitalQuestion() {
        //isto vai ter q ir buscar um molhe merdas
    }

    function getFlagQuestion() {
        const randomQuestion = Math.floor(Math.random() * flagQuestions.length)
        let thisQuestion = flagQuestions[randomQuestion]
        thisQuestion.allAnswers = shuffle([...thisQuestion.incorrect_answers, thisQuestion.country])
        thisQuestion.userInput = ""
        setCurrentQuestion(thisQuestion)
        setGameState(1)
    }

    function selectAnswer(answer, id) {
        
        

        setCurrentQuestion(oldQuestion => {
            return {...oldQuestion, userInput: answer}
        })

        if(currentQuestion.userInput === currentQuestion.country) {

            setResult(result + 1)
        }
        
        
    }

    function resetGame() {
        setGameState(0)
        setResult(0)
    }


    return (
        
        <div className="page__wrapper">
            <ThemeProvider theme={Theme}>
            
            {gameState === 0 && 
                <div>
                    <Intro getFlag={getFlagQuestion}/>
                </div>}
                
            {gameState === 1 && 
                <Question 
                currentQuestion={currentQuestion} 
                state={gameState} 
                selectAnswer={selectAnswer}
                getFlag={getFlagQuestion} />}

            {gameState === 2 && 
                <div >
                    <GameOver 
                    result={result}
                    resetGame={resetGame} />
                </div> 
            } 
                
                <footer className="footer__sign">created by <u><b>Jose Alves</b></u> - devChallenges.io</footer>
            </ThemeProvider>
        </div>
    )
}