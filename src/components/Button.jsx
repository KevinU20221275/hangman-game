export const Button = ({children, index, checkLetter}) => {
    const handleClick  = () =>{
        const letter = children
        checkLetter({letter, index})   
    }

    return (
        <button onClick={handleClick} className="button py-2 px-4 bg-gradient-to-bl from-[#F8DB9C] to-[#9D59EF] rounded-md border-none">
            {children}
        </button>
    )
}