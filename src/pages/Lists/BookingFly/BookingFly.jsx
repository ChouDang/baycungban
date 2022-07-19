import React from 'react'

export const BookingFly = () => {
    return (
        <section className="h-20 px-44 flex items-center justify-between">

            <div class="flex justify-center w-36 h-full">
                <div class="block bg-white w-36 pt-5 ">
                    <p className="text-base text-indigo-700 font-medium" >Da Nang (DAD)</p>
                    <p className="text-xs font-normal mr-2 ">Fri, 22 Mar, 2022 </p>
                </div>
            </div>

            <div className="bg-arrow-icon w-6 h-[14px]"></div>

            <div class="flex justify-center w-60 h-full ">
                <div class="block bg-white w-60 pt-5 pl-20 ">
                    <p className="text-base text-indigo-700 font-medium" >Ho Chi Minh (SGN)</p>
                    <p className="text-xs font-normal mr-2 ">Fri, 22 Mar, 2022 </p>
                </div>
            </div>
            {/* info */}
            <div className="flex items-center">
                <div className="font-semibold px-3 text-sm border-r-[0.5px] border-stone-400 ">Round-trip</div>
                <div className="font-semibold px-3 text-sm  border-r-[0.5px] border-stone-400 ">02 Adult, 01 children</div>
                <div className="font-semibold px-3 text-sm">Business Class</div>
            </div>

            {/* btn */}
            <button className="btn-primary3 ">
                <div className="flex items-center ">
                    <p className="font-semibold text-sm">Change Flights</p>
                    <div className="bg-s-icon ml-2 w-[14px] h-[14px]"></div>
                </div>
            </button>
        </section>
    )
}
