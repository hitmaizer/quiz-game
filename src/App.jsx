import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Question from './components/Question';
import Data from './data.json'
import FlagQuestions from './flagquestions.json'
import Intro from './components/Intro';


export default function App() {
    const [gameState, setGameState] = React.useState(0)
    const [allData, setAllData] = React.useState([])
    const [flagQuestions, setFlagQuestions] = React.useState([])
    const [currentQuestion, setCurrentQuestion] = React.useState({
        flag: "",
        country: "",
        allAnswers: [],
        userInput: ""
    })

    React.useEffect(() => {
        const selectedData = Data.map(item => {
            return {
                name: item.name, 
                capital: item.capital, 
                region: item.region
            }
        })
        
        setAllData(selectedData)
        setFlagQuestions(FlagQuestions)
        const randomQuestion = Math.floor(Math.random() * flagQuestions.length)
        setCurrentQuestion(flagQuestions[randomQuestion])

    }, [flagQuestions])

    console.log(currentQuestion)
    

    function getCapitalQuestion() {
        //isto vai ter q ir buscar um molhe merdas
    }

    function getFlagQuestion() {
        const randomQuestion = Math.floor(Math.random() * flagQuestions.length)
        setCurrentQuestion(flagQuestions[randomQuestion])
        
    }

    //console.log(FlagQuestions)

    function stateChanger(int) {
        setGameState(int)
    }

    return (
        
        <div className="page__wrapper">
            {gameState === 0 && 
                <div>
                    <Intro stateChanger={stateChanger}/>
                </div>}
            <ThemeProvider theme={Theme}>
            {gameState === 1 && <Question currentQuestion={currentQuestion} />} 
                
                <footer className="footer__sign">created by <u><b>Jose Alves</b></u> - devChallenges.io</footer>
            </ThemeProvider>
        </div>
    )
}