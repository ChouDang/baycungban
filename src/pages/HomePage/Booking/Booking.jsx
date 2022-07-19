import React from 'react'
import { Link } from 'react-router-dom'

export const Booking = () => {
    return (
        <section className="-translate-x-20 w-[1230px] h-full rounded-xl  relative">
            <div className="bg-white w-[1230px] rounded-xl  px-12 py-8 ">
                <div className="">
                    <div className="flex items-center">
                        <div className="flex items-center px-5">
                            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointe mr-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <p className="text-sm font-semibold">One way / Round-trip</p>
                        </div>
                        <div className="flex items-center px-5 ">
                            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <p className="text-sm font-semibold items-center flex">Multi-city</p>
                        </div>
                        <div className="px-5 ">
                            <p className="text-sm font-semibold  items-center flex">02 Adult, 01 children <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                class="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg></p>
                        </div>
                        <div className="px-5 flex items-center">
                            <p className="text-sm font-semibold items-center flex">Business Class <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                class="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg></p>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div name="content" className="flex items-center my-5">

                    <div class="flex justify-center w-[300px]">
                        <div class="block p-4 shadow-lg bg-white w-[100%] h-24 mx-2 rounded-xl border-solid border-2">
                            <p className="text-xs font-semibold tracking-widest text-slate-500">FROM</p>
                            <p className="text-2xl text-indigo-700 font-medium" >Da Nang</p>
                            <p className="text-sm font-semibold">Quang Nam, Viet Nam</p>
                        </div>
                    </div>

                    <div class="flex justify-center w-[300px]">
                        <div class="block p-4 rounded-xl shadow-lg bg-white max-w-sm w-[100%] h-24 mx-2 border-solid border-2">

                            <p className="text-xs tracking-widest text-slate-500 font-semibold ">TO</p>
                            <p className="text-2xl text-indigo-700 font-medium">Ho Chi Minh</p>
                            <p className="text-sm font-semibold">Viet Nam</p>

                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="p-4 rounded-xl shadow-lg bg-white flex items-center justify-between w-[530px] h-24 mx-2 border-solid border-2">
                            <div name="left" className="w-[100%]" >
                                <p className="text-xs tracking-widest text-slate-500 font-semibold ">DEPARTURE</p>
                                <div className="flex items-center">
                                    <p className="text-2xl text-indigo-700 font-medium mr-2 ">Fri, 22 Mar, 2022 </p>
                                    <div className="bg-calendar-icon w-[14px] h-[14px]"></div>
                                </div>
                                <div className="flex items-center">
                                    <a className="text-sm font-semibold mr-5 underline decoration-solid">Prev</a>
                                    <p className="text-sm font-semibold text-slate-500">Next</p>
                                </div>
                            </div>
                            <div name="right " className="w-[100%] ml-16">
                                <p className="text-xs tracking-widest text-slate-500 font-semibold">RETURN</p>

                                <div className="flex items-center">
                                    <p className="text-2xl text-indigo-700 font-medium mr-2 ">Fri, 22 Mar, 2022 </p>
                                    <div className="bg-calendar-icon w-[14px] h-[14px]"></div>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm font-semibold mr-5 text-slate-500">Prev</p>
                                    <p className="text-sm font-semibold text-slate-500">Next</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/list' className="w-56 h-14 z-[9999] absolute right-5 -bottom-5">
                    <button className=" bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50 focus:ring-opacity-75 w-56 h-14  ">
                        <div className="flex items-center justify-around">
                            <p className="text-lg font-semibold ">Search Flights </p> <div className="bg-vector-icon w-[22px] h-[12px] ml-3"></div>
                        </div>
                    </button>
                </Link>
            </div>
        </section>
    )
}
