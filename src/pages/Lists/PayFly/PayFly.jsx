import React from 'react'

export const PayFly = () => {
    return (
        <><div className='row-span-1 '>
            <div className="flex justify-center pt-4 ">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm w-[270px] ">
                    <div className="p-4 border-b border-gray-300">
                        <p className="text-sm font-semibold">YOUR FLIGHT</p>
                    </div>

                    <div className="px-[15px] pt-[20px]">
                        <div className="flex items-center pb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                className="rounded-full w-[30px] h-[30px] mr-3"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-sm font-light">Fri, 11 Feb, 2022</h5>
                                <p className="text-sm font-semibold">Da Nang - Ho Chi Minh</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-[15px] pb-[20px]">

                        <div className="flex items-center pb-4">
                            <div className="rounded-md w-[30px] h-[30px] mr-3 bg-bamboo-icon"></div>
                            <div>
                                <h5 className="text-sm font-semibold tracking-widest">BAMBOO AIRWAYS</h5>
                                <p className="text-xs font-semibold text-indigo-700 underline">Details</p>
                            </div>
                        </div>
                        {/* time fly */}
                        <div className="flex items-center">

                            <div>
                                <p className="text-sm font-semibold">21:40</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>

                            <div className="">
                                <div className="items-center flex justify-center">
                                    <p>1h 30m</p>
                                </div>
                                <div className="flex items-center px-6">
                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                    <div className="border-b-[1px] border-blue-600 w-[110px]"></div>
                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                </div>
                                <div className="items-center flex justify-center">
                                    <p>Direct</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-semibold">23:10</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>
                        </div>


                        <button type="button" className=" inline-block w-60 h-[38px] bg-blue-100 font-semibold text-xs text-indigo-700 leading-tight  rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out mt-6 mb-4">Change departure flight
                        </button>
                        <hr width="100%" align="center" />
                        <div className="flex items-center pt-[14px]">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                className="rounded-full w-[30px] h-[30px] mr-3"
                                alt="Avatar"
                            />
                            <div>
                                <h5 className="text-sm font-light">Sun, 13 Feb, 2022</h5>
                                <p className="text-sm font-semibold">Ho Chi Minh - Da Nang</p>
                            </div>
                        </div>

                    </div>

                    <div className="border-t border-gray-300  p-4">
                        <div >
                            <p className="font-light text-sm">Subtotal</p>
                            <p className="text-orange-600 text-sm font-semibold">1,322,000 vnd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}
