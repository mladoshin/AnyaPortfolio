function Card({ text }) {
    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl border-2 border-gray-300 p-7 h-96 items-center shadow-2xl">
            <div className="my-auto align-middle">
                <p className="font-bold text-gray-800 text-center text-2xl card-text">{text}</p>
            </div>
            <button className="bg-red-500 w-40 mx-auto rounded-md focus:ring-2 ring-offset-4 ring-red-500 py-1 text-white font-normal text-lg hover:bg-red-700 transition">Подробнее</button>
        </div>
    )
}

export default Card
