import { useEffect, useState } from "react"
import { LANGUAGUES } from "../logic/const"
import { getNewWord, updateKeyboard, correctWord } from "../logic/utils"
import { SPANISH_WORDS, ENGLISH_WORDS } from "../logic/const" 
import { restoreButtonsAndLetters, checkLetter, playSound } from "../logic/utils"

export function useCheckWords(){
    const [winner, setWinner] = useState(null)
    const [level, setLevel] = useState(0)
    const [currentWord, setCurrentWord] = useState({
        word: [],
        hint: ""
    })
    const [incorrectLetters, setIncorrectLetters] = useState(0)
    const [language, setLanguage] = useState(LANGUAGUES.ENGLISH)
    const [points, setPoints] = useState(0)
    const [guessedLetters, setGuessedLetters] = useState(0)
    const [words, setWords] = useState(ENGLISH_WORDS)

    useEffect(() => {
        if (winner !== null) return

        const {word, hint} = getNewWord(words, level)
        setCurrentWord({word, hint})
        restoreButtonsAndLetters()
        setIncorrectLetters(0)
        setGuessedLetters(0) 
    }, [level,language])

    
    const checkLetterInWord = ({letter, index}) => {
        if (winner !== null) return

        const newCurrentWord = [...currentWord.word]
        const isInCurrenWord = newCurrentWord.findIndex((l) => l === letter)

        updateKeyboard(index)

        if (isInCurrenWord !== -1) {
            const {lettersFound} = checkLetter(letter)
    
            const newGuessedLetters = guessedLetters + lettersFound
            setGuessedLetters(newGuessedLetters)
            playSound('correct-choice')

            if (newGuessedLetters === currentWord.word.length){
                correctWord()
                playSound('correct-word')
                
                setTimeout(() => {
                    const newLevel = level + 1
                    const newPoints = points + (5 * newLevel)
                    if (newLevel === words.length){
                        playSound('win', .2)
                        setWinner(true)
                    } 
                    setPoints(newPoints)
                    setLevel(newLevel)
                },500)
            }
        } else {
            const newIncorrectLetters = incorrectLetters + 1
            setIncorrectLetters(newIncorrectLetters)
            
            playSound('incorrect-choice')
            
            if (newIncorrectLetters === 6){
                setTimeout(() => {
                    playSound('lose')
                    setWinner(false)
                }, 500)
            }
    
        }
    }

    const reset = () => {
        setLevel(0)
        setWinner(null)
        setPoints(0)
        setIncorrectLetters(0)
        restoreButtonsAndLetters()
    }

    return {winner, reset, checkLetterInWord, setLanguage, setWords, language, points, incorrectLetters, currentWord}
}
