import { LANGUAGUES } from "../logic/const"
export function SelectLanguage({language, optionEnglishLabel, optionSpanishLabel, selectLanguageLabel, handleChangeLanguages}){
    return (
         <div className="flex flex-col justify-center items-center gap-4">
            <label className="text-base text-gray-600">{selectLanguageLabel}</label>
            <select value={language} 
                onChange={handleChangeLanguages}
                className="w-full border-none bg-gradient-to-l from-white to-[#9D59FF] p-2 rounded-md">
                <option value={LANGUAGUES.ENGLISH}
                className="bg-[#9D59FF] ">
                    {optionEnglishLabel}
                </option>
                <option value={LANGUAGUES.SPANISH}
                className="bg-[#9D59FF]">
                    {optionSpanishLabel}
                </option>
            </select>
        </div>
    )
}