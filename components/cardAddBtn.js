function PlusIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

function CardAddBtn({ open }) {
    return (
        <div className="flex flex-col bg-transparent rounded-2xl border-4 border-gray-300 p-7 h-96 items-center card sm:h-80 md:w-96 md:justify-self-center md:p-7 lg:w-100 xl:w-full border-dashed justify-center hover:bg-gray-500 hover:bg-opacity-10" onClick={open}>
            <PlusIcon/>
        </div>
    )
}

export default CardAddBtn