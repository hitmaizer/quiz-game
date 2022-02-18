import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Quote from './components/Question';
import Data from './data.json'
import FlagQuestions from './flagquestions.json'


export default function App() {
    const [allData, setAllData] = React.useState([])
    const [flagQuestions, setFlagQuestions] = React.useState([])
    const [currentQuestion, setCurrentQuestion] = React.useState({
        flag: "",
        country: "",
        allAnswers: [],
    })

    React.useEffect(() => {
        const selectedData = Data.map(item => {
            return {
                name: item.name, 
                capital: item.capital, 
                region: item.region}
        })
        
        setAllData(selectedData)
        setFlagQuestions(FlagQuestions)
    }, [])

    console.log(FlagQuestions)

    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Quote />
                <footer className="footer__sign">created by <u><b>Jose Alves</b></u> - devChallenges.io</footer>
            </div>
        </ThemeProvider>
    )
}