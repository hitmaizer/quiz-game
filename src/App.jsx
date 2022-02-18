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
        // random index const
        const randomQuestion = Math.floor(Math.random() * allData.length)
        // allData[random]--> capital, country
        let thisQuestion = allData[randomQuestion]
        thisQuestion.allAnswers = [thisQuestion.capital]
        // for loop i < 3 -> allData[random].capital
        for (let i = 0; i < 3; i++) {
            const randomCapital = Math.floor(Math.random() * allData.length)
            let fakeCapital = allData[randomCapital].capital
            // allAnswers -> 3 randoms + capital
            thisQuestion.allAnswers.push(fakeCapital)
        }
        setCurrentQuestion(thisQuestion)
        setGameState(1)
    }

    console.log(currentQuestion)
    
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
        });
    }

    function confirmQuestion() {
        setGameState(3)
    }

    function nextQuestion() {
        if (currentQuestion.userInput === currentQuestion.country) {

            setResult(oldResult => {
                return oldResult + 1
            })

            getFlagQuestion()
            
        } else {
            setGameState(2)
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
                    <Intro 
                    getFlag={getFlagQuestion}
                    getCapital={getCapitalQuestion} 
                    />
                </div>}
                
            {gameState === 1 && 
                <Question 
                currentQuestion={currentQuestion} 
                state={gameState} 
                selectAnswer={selectAnswer}
                getFlag={getFlagQuestion}
                getCapital={getCapitalQuestion}
                nextQuestion={nextQuestion}
                confirmQuestion={confirmQuestion} />}
            
            {gameState === 3 && 
                <Question 
                currentQuestion={currentQuestion} 
                state={gameState} 
                selectAnswer={selectAnswer}
                getFlag={getFlagQuestion}
                nextQuestion={nextQuestion}
                confirmQuestion={confirmQuestion} />}

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