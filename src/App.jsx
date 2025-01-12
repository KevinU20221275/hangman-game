import { WinOrLoseModal } from "./components/WinOrLoseModal"
import { LANGUAGUES, SPANISH_WORDS, ENGLISH_WORDS } from "./logic/const"
import { Keyboard } from "./components/Keyboard"
import { TEXT_VIEW } from "./logic/const"
import { useCheckWords } from "./hooks/useCheckWords"
import { CurrentImage } from "./components/CurrentImage"
import { CurrentWord } from "./components/CurrentWord"
import { ScoreBoard } from "./components/ScoreBoard"
import { SelectLanguage } from "./components/SelectLanguage"


export function App(){
    const {winner, reset, language, setLanguage, setWords, currentWord, checkLetterInWord, incorrectLetters, points} = useCheckWords()

    const handleChangeLanguages = (e) => {
        e.preventDefault()
        const newLanguague = e.target.value
        if (newLanguague === LANGUAGUES.ENGLISH){
            setLanguage(LANGUAGUES.ENGLISH)
            setWords(ENGLISH_WORDS)
        } else {
            setLanguage(LANGUAGUES.SPANISH)
            setWords(SPANISH_WORDS)
        }
    }

    return (
        <main className="relative min-h-screen min-w-screen flex justify-center items-center md:px-6">
            <div className="w-[520px] bg-[#9D59FF] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
            <section className="z-10 bg-white/40 p-4 rounded-md">
                <h1 className="text-2xl text-center bg-gradient-to-br from-[#9D59EF] to-[#232323] bg-clip-text text-transparent font-semibold">{TEXT_VIEW[language].title}</h1>
                <article className="flex p-4 flex-wrap justify-center items-center gap-4">
                    <CurrentImage image={incorrectLetters}></CurrentImage>
                    <div className="flex flex-col px-4 gap-6 max-w-lg">
                        <CurrentWord word={currentWord.word}></CurrentWord>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p>{TEXT_VIEW[language].hintLabel}: <strong>{currentWord.hint}</strong></p>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-16">
                                <ScoreBoard
                                resetLabel={TEXT_VIEW[language].resetLabel}
                                reset={reset}
                                scoreLabel={TEXT_VIEW[language].scoreLabel}
                                score={points}
                                incorrectLettersLabel={TEXT_VIEW[language].incorrectLettersLabel}
                                incorrectLetters={incorrectLetters}
                                ></ScoreBoard>
                               
                               <SelectLanguage
                                language={language}
                                optionEnglishLabel={TEXT_VIEW[language].languageOptions.english}
                                optionSpanishLabel={TEXT_VIEW[language].languageOptions.spanish}
                                selectLanguageLabel={TEXT_VIEW[language].selectLanguageLabel}
                                handleChangeLanguages={handleChangeLanguages}
                                ></SelectLanguage>
                            </div>
                        </div>
                        <Keyboard checkLetterInCurrentWord={checkLetterInWord}></Keyboard>
                    </div>
                </article>
            </section>
            {winner !== null && 
                <WinOrLoseModal 
                    reset={reset} 
                    title={winner ? `${TEXT_VIEW[language].win.winLabel}` : `${TEXT_VIEW[language].lose.loseLabel}`}
                    message={winner? `${TEXT_VIEW[language].win.winMessage}` : `${TEXT_VIEW[language].lose.loseMessage} ${currentWord.word.join("")}`}
                    imageSrc={winner ? 'victory.gif' : 'lost.gif' }
                    buttonMessage={`${TEXT_VIEW[language].buttonPlayAgainLabel}`}
                    textColor={winner ? 'text-green-600': 'text-red-600'}
                ></WinOrLoseModal> 
            }
        </main>
    )
}