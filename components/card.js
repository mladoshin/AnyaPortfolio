function EditBtn({ open }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={open}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    )
}

function Card({ gig, setIsOpen, admin, open, t }) {
    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl border-2 border-gray-300 p-7 h-96 items-center shadow-2xl card sm:h-80 md:w-96 md:justify-self-center md:p-7 lg:w-100 xl:w-full">
            <div className="my-auto align-middle">
                <p className="font-bold text-gray-800 text-center text-2xl card-text sm:text-2xl md:text-3xl">{t(gig?.title)}</p>
            </div>
            <div className="flex flex-row items-center">
                <button className="bg-red-500 w-40 mx-auto rounded-md focus:ring-2 ring-offset-4 ring-red-500 py-1 text-white font-normal text-lg hover:bg-red-700 transition btnCard" onClick={() => setIsOpen(true)}>Подробнее</button>
                {admin && <EditBtn open={open}/>}
            </div>

        </div>
    )
}

export default Card
