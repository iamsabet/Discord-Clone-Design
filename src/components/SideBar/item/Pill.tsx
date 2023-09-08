
const Pill = () => {
    // selected and hover + big
    const selected=false
    return (
        <div className={`pill absolute left-0 w-1 bg-white z-10 rounded-tr-lg rounded-br-lg transition-all duration-200 ease-in-out
            ${selected ? "h-10" : "h-0 w-0 group-hover:h-6 group-hover:w-1" }`}>
        </div>
    )
}

export default Pill