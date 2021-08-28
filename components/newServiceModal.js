import { useState, useEffect } from "react"
import { useDocumentData } from "react-firebase-hooks/firestore"
import firebase from "../firebase/firebase"

function NewServiceModal({ t, mode, id, close }) {
    const [title, setTitle] = useState("")
    const [titleEN, setTitleEN] = useState("")
    const [order, setOrder] = useState("")
    const [headerText, setHeaderText] = useState("")
    const [submitBtnText, setSubmitBtnText] = useState("")
    const query = mode === "edit" ? firebase.fireDB.collection("services").doc(id) : null
    const [gig, loading, error] = useDocumentData(query)

    // console.log(gig)

    useEffect(() => {
        if (mode === "edit" && gig) {
            //set russian title
            setTitle(gig.title)
            //set english title
            setTitleEN(t(gig.title, true))
            setOrder(gig.order)
        }
    }, [gig])

    useEffect(() => {

        if (mode === "create") {
            setHeaderText(t('Добавление новой услуги'))
            setSubmitBtnText(t('Добавить услугу'))
        } else if (mode === "edit") {
            setHeaderText(t('Редактирование услуги'))
            setSubmitBtnText(t('Сохранить изменения'))
        }

    }, [mode])


    function handleSubmit() {

        //data validation
        if (title === "" || order === "" || order < 0) {
            return
        }

        if (mode === "create") {
            //logic for creating the gig
            firebase.createNewGig(title, order)
            firebase.addNewTranslation(title, titleEN)
            close()
        } else if (mode === "edit") {
            //logic for editing the gig
            let updates = {}
            if (gig.title !== title) {
                updates.title = title
            }

            if(t(gig.title, true)!==titleEN){
                //update the translation
                firebase.addNewTranslation(gig.title, titleEN)
            }

            if (gig.order !== order) {
                updates.order = order
            }

            firebase.updateGig(updates, id)
            close()
        }
    }

    function DeleteBtn() {

        const handleClick = () => {
            firebase.deleteGig(id)
            firebase.removeTranslation(gig.title)
            close()
        }

        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 hover:text-red-500 rounded-full focus:ring-3 ring-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        )
    }

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white rounded text-black w-full">
                <h1 className="mb-8 text-3xl text-center">{headerText}</h1>

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="title"
                    placeholder={t('Название на русском')}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="title"
                    placeholder={t('Название на английском')}
                    value={titleEN}
                    onChange={e => setTitleEN(e.target.value)}
                />

                <input
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="order"
                    placeholder={t("Порядковый номер")}
                    value={order}
                    onChange={e => setOrder(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green-400"
                    onClick={handleSubmit}
                >{submitBtnText}</button>
            </div>

            {mode === "edit" && <DeleteBtn />}

        </div>
    )
}

export default NewServiceModal
