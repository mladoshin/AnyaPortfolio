import '../styles/index.css'
import React, {useState, useEffect} from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "../firebase/firebase"

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
  const [user, loading] = useAuthState(firebase.auth)

  console.log(user)

  return <Component {...pageProps} lang={lang} setLang={setLang}/>
}

export default MyApp
