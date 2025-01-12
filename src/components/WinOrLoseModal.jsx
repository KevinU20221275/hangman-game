export function WinOrLoseModal({title, message ,reset,imageSrc,buttonMessage, textColor}){

    return (
        <div className="modal absolute backdrop-blur-md w-64 py-4 z-10 flex flex-col justify-center items-center gap-3 rounded-md shadow-lg">
            <h3 className={`text-2xl ${textColor} font-semibold`}>{title}</h3>
            <p>{message}</p>
            <figure className="w-24 aspect-w-1 aspect-h-1">
                <img className="object-cover" src={`/images/${imageSrc}`} alt={`gif of a emogi to say the player: ${title} `} />
            </figure>
            <button 
                onClick={() => reset()}
                className="px-4 py-2 bg-black rounded-md text-[#9D59FF] hover:bg-[#9D59FF] hover:text-black transition-all self-center">
                {buttonMessage}
            </button>
        </div>
    )
}