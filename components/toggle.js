import {useEffect, useRef} from "react"
function Switch({ lang, setLang }) {
    const btnRef = useRef()
    const title = lang==="en" ? "Rus" : "En"

    useEffect(()=>{
        btnRef.current.style.color = lang === "en" ? "blue" : "red"
    }, [lang])

    const toggleLocale=()=>{
        setLang(curLang => {
            if(curLang==="en") return "ru"
            if(curLang==="ru") return "en"
        })
    }

    return (
        <button ref={btnRef} className="text-sm bg-white text-gray-700 w-8 h-8 rounded-full font-mono font-semibold" onClick={toggleLocale}>{title}</button>
    )
}

export default Switch
