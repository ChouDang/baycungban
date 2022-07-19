import React from 'react'

export const HeaderHome = () => {
    return (
        <><section className="flex justify-between items-center py-5 px-44">
            <div className="flex">
                <a className="text-xl pr-3 font-bold ">Baycungban</a>
                <div className="bg-vietnam-icon w-5 h-5 mr-2 items-stretch mt-1"></div>
                <div className="bg-usa-icon w-5 h-5 items-stretch mt-1"></div>
            </div>
            <div className="flex">
                <a className="text-sm px-4 mt-1 font-normal tracking-wider" >Promotion</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider">Flight Schedule</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider">About us</a>
                <a className="text-sm px-4 mt-1 font-normal tracking-wider">Payment Guide</a>
            </div>
            <button className="btn-primary text-sm font-normal">Booking Now</button>
        </section>
        </>
    )
}
