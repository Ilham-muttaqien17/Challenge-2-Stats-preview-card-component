function Stat({value, desc}) {
    return (
        <div className="">
            <h4 className="text-lg md:text-xl text-white font-inter font-bold mb-2 ">{value}</h4>
            <p className="text-xs text-neutral-slightly-1 font-lexend">{desc}</p>
        </div>
    )
}

export default Stat
