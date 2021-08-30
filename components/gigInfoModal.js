import { useState } from "react"
import MyModal from "./modal"
import firebase from "../firebase/firebase"

function GigInfoForm({ t, gig, admin }) {
    const [edit, setEdit] = useState(false)
    const [info, setInfo] = useState(gig?.info ? gig?.info : "")


    const text = []
    info.split("\n").forEach(line => {
        console.log(line)
        const el = line!=="" ? <p>{line}</p> : <br/>
        text.push(el)         
    })

    //console.log(text)

    const toggleEdit = () => {
        setEdit(curEdit => {
            return !curEdit
        })
    }

    const saveGigInfo = () => {
        let consent = window.confirm("Are you sure you want to save?")

        if (consent) {
            // saving the gig info
            firebase.updateGigInfo(gig.id, info)
            setEdit(false)
        }
    }

    return (
        <div className="bg-white rounded text-black w-full">
            <h1 className="my-4 text-xl text-center">{t(gig?.title)}</h1>

            {admin &&
                <button
                    type="submit"
                    className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-gray-400"
                    onClick={toggleEdit}
                >{edit ? "View" : "Edit"}</button>
            }


            {edit ?
                <textarea
                    type="text"
                    className="w-full block border border-grey-light p-3 rounded flex-1 resize-none"
                    name="gigInfo"
                    placeholder="Gig info"
                    value={info}
                    rows={10}
                    onChange={e => setInfo(e.target.value)}
                />
                :
                <div className="max-h-96 overflow-y-scroll">
                    {text}
                </div>
            }

            <button></button>


            {edit &&
                <button
                    type="submit"
                    className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green-400"
                    onClick={saveGigInfo}
                >Save</button>
            }


        </div>
    )
}

function GigInfoModal({ t, isOpen, setIsOpen, gig, admin }) {
    const title = t("Об услуге")
    const gigId = isOpen?.gigId

    console.log(gig[0])

    return (
        <MyModal isOpen={gigId ? true : false} setIsOpen={setIsOpen} title={title} maxWidth="max-w-7xl">
            <GigInfoForm t={t} gig={gig[0]} admin={admin} />
        </MyModal>
    )
}

export default GigInfoModal
