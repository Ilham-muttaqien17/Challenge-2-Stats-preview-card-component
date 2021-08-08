function RightSide() {
    return (
        // <div className="relative bg-desktop">
        //     <div className="bg-primary-soft-violet absolute top-0 left-0 w-full h-full"></div>
        // </div>
        <div className="relative w-full h md:w-6/12 ">
            <img className="rounded-t-lg w-full object-cover md:h-full md:rounded-r-lg md:rounded-tl-none" src="/desktop.jpg" alt="" />

            <div className="absolute bg-primary-soft-violet opacity-90 w-full h-full top-0 right-0 mix-blend-multiply"/>
            
            
        </div>
    )
}

export default RightSide
