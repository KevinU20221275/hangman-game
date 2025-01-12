export function CurrentImage({image}) {
    return (
        <div className="max-w-[250px]">
            <figure>
                <img src={`/images/hangman-${image}.svg`} alt="" />
            </figure>
        </div>
    )
}