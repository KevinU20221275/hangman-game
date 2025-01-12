export function CurrentWord({word}){
    return (
        <header className="flex gap-4 justify-center items-center">
            {word?.map((letter,index) => {
                return <span key={index} className="letter border-b-2 border-black text-2xl w-8 text-center text-transparent">{letter}</span>
            })}
        </header>
    )
}