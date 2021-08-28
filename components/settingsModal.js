import { useState } from "react"
import MyModal from "./modal"
import firebase from "../firebase/firebase"

function SettingsForm({ t }) {
    const [newPass, setNewPass] = useState("")
    const [hide, setHide] = useState(true)

    const toggleHide = () => {
        setHide(curHide => {
            return !curHide
        })
    }

    const savePassword = () => {
        let consent = window.confirm("Are you sure you want to create a new password?")

        if (consent) {
            firebase.updateAdminPassword(newPass)
        }
    }

    return (
        <div className="bg-white rounded text-black w-full">
            <h1 className="my-4 text-xl text-left">{t('Безопасность')}</h1>

            <div className="flex flex-row mb-4 items-center">
                <input
                    type={hide ? "password" : "text"}
                    className="block border border-grey-light p-3 rounded flex-1"
                    name="password"
                    placeholder="New password"
                    value={newPass}
                    onChange={e => setNewPass(e.target.value)}
                />

                <div className="pl-4">
                    <button
                        type="submit"
                        className="text-center w-14 py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-gray-300"
                        onClick={toggleHide}
                    >{hide ? "View" : "Hide"}</button>
                </div>

            </div>

            <button
                type="submit"
                className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green-400"
                onClick={savePassword}
            >Save</button>

        </div>
    )
}

function SettingsModal({ t, isOpen, setIsOpen }) {
    const title = t("Настройки")
    return (
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
            <SettingsForm t={t} />
        </MyModal>
    )
}

export default SettingsModal
