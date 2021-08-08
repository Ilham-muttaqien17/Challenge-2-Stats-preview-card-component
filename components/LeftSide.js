import Stat from "./Stat"

function LeftSide() {
    return (
        <div className="w-full md:w-6/12 bg-primary-dark-desaturated-blue py-10 text-center rounded-b-lg md:text-left md:px-10  md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:pt-16">
            <h2 className="w-10/12 text-3xl md:text-4xl text-neutral-white font-inter font-bold mb-5 mx-auto">Get <span className="text-primary-soft-violet">insight</span> that help your business grow.</h2>
            <p className="font-[15px] w-10/12 text-neutral-slightly-1 font-inter leading-[1.5rem] mx-auto md:text-[0.875rem]">Discover the benefits of data analytics and make better decisions regaring revenue, customer experience, and overall efficiency.</p>
            <div className="flex flex-col flex-wrap md:flex-row w-10/12 gap-y-8 mt-10 md:text-left mx-auto md:gap-x-12 md:mt-24">
                <Stat 
                    value="10k+"
                    desc="COMPANIES"
                />
                <Stat 
                    value="314"
                    desc="TEMPLATES"
                />
                <Stat 
                    value="12M+"
                    desc="QUERIES"
                />
            </div>
        </div>
    )
}

export default LeftSide
