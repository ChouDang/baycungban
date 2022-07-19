import React from 'react'

export const HeaderLists = () => {
    return (
        <><section className="flex justify-between items-center py-5 px-44 bg-indigo-700 ">
            <div className="flex">
                <a className="text-xl pr-3 font-bold text-white ">Baycungban</a>
                <div className="bg-vietnam-icon w-5 h-5 mr-2 items-stretch mt-1"></div>
                <div className="bg-usa-icon w-5 h-5 items-stretch mt-1"></div>
            </div>
            <div className="flex">
                <a className="text-sm px-4 mt-1 font-normal tracking-wider text-white " >Promotion</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider text-white ">Flight Schedule</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider text-white ">About us</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider text-white ">Payment Guide</a>
            </div>
            <button className="btn-primary2 text-sm font-normal">Booking Now</button>
        </section>
        </>
    )
}
