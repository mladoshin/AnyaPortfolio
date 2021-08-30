import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import firebase from '../firebase/firebase'
import {useState} from "react"

function RequestForm({ t }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNum, setMobileNum] = useState("")
    const [question, setQuestion] = useState("")
    
    const clearState = () => {
        setName("")
        setEmail("")
        setMobileNum("")
        setQuestion("")
    }

    const submitForm = () => {
        const payload = {
            name, email, mobileNum, question
        }
        console.log(payload)

        if(name!=="" && email!=="" && mobileNum!==""){
            firebase.sendRequest(name, mobileNum, email, question)
            clearState()
        }
        
    }

    return (
        <div className="border-2 border-gray-200 bg-white my-20 px-14 py-6 rounded-xl shadow-xl w-6/12 max-w-lg sm:w-11/12 md:w-10/12">
            <h1 className="text-center text-4xl font-bold request-text">{t("Оставьте заявку")}</h1>

            <div className="my-8">
                <input
                    type="name"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="name"
                    placeholder={t("Имя")}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <PhoneInput
                    international
                    defaultCountry="RU"
                    value={mobileNum}
                    onChange={setMobileNum} 
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                />

                <input
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder={t("Почта")}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <textarea
                    rows={5}
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded resize-none mb-4"
                    name="email"
                    placeholder={t("Вопросы")}
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-red-500 request-btn"
                    onClick={submitForm}
                >{t('Оставить заявку')}</button>


            </div>


        </div>
    )
}

export default RequestForm
