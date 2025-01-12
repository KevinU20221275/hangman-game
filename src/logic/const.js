export const KEYBOARD = [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z",
]

export const ENGLISH_WORDS = [
    { word: "cat", hint: "Animal that says meow" },
    { word: "sun", hint: "Shines in the sky during the day" },
    { word: "tree", hint: "Large plant with trunk and leaves" },
    { word: "beach", hint: "Place with sand and sea" },
    { word: "school", hint: "Where children go to learn" },
    { word: "computer", hint: "Device for work and play" },
    { word: "student", hint: "Person who attends school" },
    { word: "bicycle", hint: "Two-wheeled mode of transport" },
    { word: "volcano", hint: "It’s a mountain that can erupt with lava." },
    { word: "library", hint: "Place where books are kept" }
];
  

export const SPANISH_WORDS = [
    { word: "gato", hint: "Animal que dice miau" },
    { word: "sol", hint: "Brilla en el cielo durante el día" },
    { word: "arbol", hint: "Planta grande con tronco y hojas" },
    { word: "playa", hint: "Lugar con arena y mar" },
    { word: "escuela", hint: "Donde los niños van a aprender" },
    { word: "computadora", hint: "Dispositivo para trabajar y jugar" },
    { word: "estudiante", hint: "Persona que asiste a la escuela" },
    { word: "bicicleta", hint: "Medio de transporte con dos ruedas" },
    { word: "volcan", hint: "Es una montaña que puede arrojar lava." },
    { word: "biblioteca", hint: "Lugar donde se guardan libros" }
];
  
export const LANGUAGUES = {
    ENGLISH : "en",
    SPANISH : "es"
}

export const TEXT_VIEW = {
    'en' : {
        title : "Hangman Game",
        hintLabel : "Hint",
        win : {
            winLabel: "You've won!",
            winMessage: "This is easy for you"
        },
        lose : {
            loseLabel: "You've lost!",
            loseMessage: "The correct word was: "
        },
        playAgain : "Play Again",
        incorrectLettersLabel: "Incorrect Letters:",
        resetLabel : "Reset",
        scoreLabel: "Score",
        selectLanguageLabel : "Select your Language: ",
        languageOptions: {
            english : "English",
            spanish : "Spanish"
        },
        buttonPlayAgainLabel: "Play Again",
    },
    'es' : {
        title : "Juego del Ahorcado",
        hintLabel : "Pista",
        win : {
            winLabel: "Has ganado!",
            winMessage: "Definitivamente eres muy bueno!"
        },
        lose : {
            loseLabel: "Has perdido!",
            loseMessage: "La palabra correcta era: "
        },
        playAgain : "Jugar de nuevo",
        incorrectLettersLabel: "Letras incorrectas:",
        resetLabel : "Reiniciar",
        scoreLabel: "Puntaje",
        selectLanguageLabel : "Elige tu Idioma:",
        languageOptions: {
            english : "Inglés",
            spanish : "Español"
        },
        buttonPlayAgainLabel: "Jugar de nuevo",
    }
}