export function ScoreBoard({resetLabel, reset, scoreLabel, score, incorrectLettersLabel, incorrectLetters}){
    return (
        <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-center">{scoreLabel}: <strong className="text-green-600">{score}</strong></p>
            <span className="text-center">{incorrectLettersLabel} <strong className="text-red-600">{incorrectLetters}/6</strong></span>
            <button onClick={() => reset()} className="bg-gradient-to-l from-black to-[#9D59FF] px-4 py-2 rounded-md text-white hover:from-black hover:to-black transition-all w-full">{resetLabel}</button>
        </div>
    )
}