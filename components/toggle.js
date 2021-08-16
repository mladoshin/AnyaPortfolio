function Switch({ locale, setLocale }) {
    console.log(locale)
    const title = locale==="en-US" ? "Rus" : "En"

    const toggleLocale=()=>{
        setLocale(curLocale => {
            if(curLocale==="en-US") return "ru-RU"
            if(curLocale==="ru-RU") return "en-US"
        })
    }

    const colorStyle = {color: locale==="ru-RU" ? "red" : "blue"}
    return (
        <button for="toggle" className="text-xs bg-white text-gray-700 w-8 h-8 rounded-full font-mono font-semibold" style={colorStyle}onClick={toggleLocale}>{title}</button>
    )
}

export default Switch
