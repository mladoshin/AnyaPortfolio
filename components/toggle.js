function Switch({ lang, setLang }) {
    console.log(lang)
    const title = lang==="en" ? "Rus" : "En"
    const toggleLocale=()=>{
        setLang(curLang => {
            if(curLang==="en") return "ru"
            if(curLang==="ru") return "en"
        })
    }

    const colorStyle = {color: lang==="ru" ? "red" : "blue"}
    return (
        <button className="text-xs bg-white text-gray-700 w-8 h-8 rounded-full font-mono font-semibold" style={colorStyle}onClick={toggleLocale}>{title}</button>
    )
}

export default Switch
