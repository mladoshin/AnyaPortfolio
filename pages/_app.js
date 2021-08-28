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
  const [admin, setAdmin] = useState(false)

  useEffect(()=>{
      console.log(user)
      if(user?.uid==="J8yMr2kboZZsVle6ndbMYy5B97b2" && user.email==="admin@admin.ru"){
        //sessionStorage.setItem("admin", true)
        setAdmin(true)
      }else{
        //sessionStorage.setItem("admin", false)
        setAdmin(false)
      }
  }, [user])

  //console.log(user.uid)


  return <Component {...pageProps} lang={lang} setLang={setLang} admin={admin}/>
}

export default MyApp
