import MyModal from "./modal"
import { useState, useEffect } from "react"
import firebase from "../firebase/firebase"

function RegisterForm({ t, setLoginMode, closeModal }) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    async function onRegister() {
        if (name==="" || surname==="" || email==="" || password===""){
            alert("The input fields must not be empty!")
            return
        }

        if(password!==passwordConfirm){
            alert("Confirmed password doesn't match!")
            return
        }

        try {
            await firebase.register(name, surname, email, password).then(()=>closeModal())
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white rounded text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="First Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Last Name"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                />

                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                />

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green-400"
                    onClick={onRegister}
                >Create Account</button>

            </div>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <span class="no-underline border-b border-blue text-blue cursor-pointer" onClick={setLoginMode}>
                    Log in
                </span>.
            </div>
        </div>
    )
}


function LoginForm({ t, setRegisterMode, closeModal }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onLogin(){
        if(email==="" || password===""){
            alert("The input fields can't be empty!")
            return
        }

        firebase.login(email, password).then(()=>closeModal()).catch(console.log)
    }

    return (
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white rounded text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Login</h1>

                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />

                <input
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    />

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green-400"
                    onClick={onLogin}
                >Login</button>

            </div>

            <div class="text-grey-dark mt-6">
                Don't have an account yet?
                <span class="no-underline border-b border-blue text-blue cursor-pointer" onClick={setRegisterMode}>
                    Register
                </span>.
            </div>
        </div>
    )
}
function AuthModal({ isOpen, setIsOpen, t, authMode }) {
    const [mode, setMode] = useState(authMode ? authMode : "login")

    useEffect(() => {
        if (isOpen) {
            setLoginMode()
        }
    }, [isOpen])

    const setLoginMode = () => {
        setMode("login")
    }

    const setRegisterMode = () => {
        setMode("register")
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    return (
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} mode={mode}>
            {mode === "login" ? <LoginForm setRegisterMode={setRegisterMode} closeModal={closeModal}/> : <RegisterForm t={t} setLoginMode={setLoginMode} setRegisterMode={setRegisterMode} closeModal={closeModal}/>}

        </MyModal>
    )
}

export default AuthModal
