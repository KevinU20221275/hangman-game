export const restoreButtonsAndLetters = () =>{
    const buttons = Array.from(document.querySelectorAll('.button'))

    if (buttons.length > 0){
        buttons.forEach((button) => {
            button.classList.remove('pointer-events-none', 'bg-[#777]')
            button.classList.add('bg-gradient-to-bl', 'from-[#F8DB9C]', 'to-[#9D59EF]')
        })
    }

    const spanLetter = document.querySelectorAll('.letter')

    if (spanLetter.length > 0) {
        spanLetter.forEach((span) => {
            span.classList.add('text-transparent')
        })
    }
}

export const getNewWord = (words, index) => {
    if (index >= words.length) return

    const current = words[index]
    const word = current.word.toUpperCase().split("")
    const hint = current.hint
    return { word, hint }
}


export const updateKeyboard = (index) => {
    const buttons = Array.from(document.querySelectorAll('.button'))
    buttons[index].classList.add('pointer-events-none', 'bg-[#777]')
    buttons[index].classList.remove('bg-gradient-to-bl', 'from-[#F8DB9C]', 'to-[#9D59EF]')
}

export const checkLetter = (letter) => {
    let lettersFound = 0;
    const spanLetter = document.querySelectorAll('.letter')
    spanLetter.forEach((span) => {
        if (span.innerText === letter) {
            lettersFound+=1
            span.classList.remove('text-transparent')
        }
    })

    return {lettersFound}
}

export const correctWord = () => {
    document.querySelectorAll('.letter').forEach((el) => el.classList.add('text-green-600','border-green-600'))

    setTimeout(() => {
        document.querySelectorAll('.letter').forEach((el) => el.classList.remove('text-green-600', 'border-green-600'))
    }, 500)
}

export const playSound = (sound, volume = 1) =>{
    const audio = new Audio(`/sound/${sound}.mp3`)
    audio.volume = volume
    audio.play()
}