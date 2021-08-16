import '../styles/index.css'
import React, {useState, useEffect} from "react"

function useLocale(){
  const initValue = typeof window !== "undefined" ? localStorage.getItem("locale") ? localStorage.getItem("locale") : window.navigator.language : null
  const [locale, setLocale] = useState(initValue)

  useEffect(()=>{
    console.log("The language has changed!")
  }, [locale])

  
  return [locale, setLocale]
}

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useLocale()
  return <Component {...pageProps} locale={locale} setLocale={setLocale}/>
}

export default MyApp
