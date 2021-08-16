import '../styles/index.css'
import React, {useState, useEffect} from "react"

function useLocale(){
  const initValue = typeof window !== "undefined" ? localStorage.getItem("lang") ? localStorage.getItem("lang") : window.navigator.language : "ru-RU"
  
  const [lang, setLang] = useState(initValue?.split("-")[0])

  useEffect(()=>{
    console.log("The language has changed to "+lang)
    if( typeof window !== undefined){
      localStorage.setItem("lang", lang)
    }

  }, [lang])

  
  return [lang, setLang]
}

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useLocale()
  return <Component {...pageProps} lang={lang} setLang={setLang}/>
}

export default MyApp
