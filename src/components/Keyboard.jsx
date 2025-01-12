import { KEYBOARD } from "../logic/const"
import { Button } from "./Button"

export function Keyboard({checkLetterInCurrentWord}) {
    return (
        <div className="flex flex-wrap gap-2 justify-center items-center">
            {KEYBOARD.map((letter, index) => <Button key={index} index={index} checkLetter={checkLetterInCurrentWord}>{letter}</Button>)}
        </div>
    )
}