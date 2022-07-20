import React from 'react'

export const ListsItem = ({ flyData }) => {
    console.log(flyData);

    const renderItem = () => {
        return flyData?.map((item, index) => {

            return (
                <><div className="block px-4 py-6 rounded-lg shadow-lg bg-white w-full my-2" key={index}>
                    <div className="flex items-center">
                        <div className="bg-bamboo-icon w-[30px] h-[30px] mr-3"></div>
                        <div>
                            <p className="text-sm font-semibold mr-6">{item.AirlineCode === "VJ" ? "VIETJET" : item.AirlineCode === "VN" ? "VIETNAM AIRLINE" : item.AirlineCode === "QH" ? "BAMBOO AIRWAYS" : ""}</p>
                        </div>
                        {/* time fly */}
                        <div className="flex items-center">
                            <div>
                                <p className="text-sm font-semibold">{item.StartDate}</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>

                            <div className="">
                                <div className="items-center flex justify-center">
                                    <p className="font-normal text-sm">{item.Duration}</p>
                                </div>
                                {/* line */}
                                <div className="flex items-center px-6">
                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                    <div className="border-b-[1px] border-blue-600 w-[78px]"></div>
                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                </div>

                                <div className="items-center flex justify-center">
                                    <p className="font-normal text-sm">Direct</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-semibold">{item.EndDate}</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>
                        </div>

                        {/* bagggage */}
                        <div className="px-7">
                            <div className=" flex items-center">
                                <div className="bg-bag-icon w-[14px] h-[14px] mx-2"></div>
                                <div className="flex items-center">
                                    <p className="font-normal text-sm">Baggage</p>
                                    <p className="font-semibold text-indigo-600 text-sm ml-1">{item.Freebag}</p>
                                </div>

                            </div>
                            <div className="flex items-center">
                                <div className="bg-cutlery-icon w-[14px] h-[14px] mx-2"></div>
                                <div className="flex items-center">
                                    <p className="font-normal text-sm">In-flight</p>
                                    <p className="font-semibold text-indigo-600 text-sm ml-1">Meal</p>
                                </div>
                            </div>
                        </div>
                        {/* price */}
                        <div className="mr-auto">
                            <p className="font-normal text-sm text-slate-500 line-through">1,326,000 vnd</p>
                            <p className="font-semibold text-sm">1,322,000 vnd</p>
                        </div>
                        <div>
                            <button className="btn-primary4 "  >Choose</button>
                        </div>
                    </div>

                    {/* info fly */}


                    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-home" class="
                    nav-link
                    block
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    active
                    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                                aria-selected="true">FLIGHT DETAIL</a>
                        </li>

                        <li class="nav-item" role="presentation">
                            <a href="#tabs-profile" class="
                                nav-link
                                block
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                border-x-0 border-t-0 border-b-2 border-transparent
                                px-6
                                py-3
                                my-2
                                hover:border-transparent hover:bg-gray-100
                                focus:border-transparent
                    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                                aria-controls="tabs-profile" aria-selected="false">FARE INFO</a>
                        </li>
                        <li class="nav-item" role="presentation"><div className="border-b-[1px] border-slate-200 w-[530px] pt-[25px]"></div></li>

                    </ul>
                    {/* tab content */}
                    <div className="tab-content " id="tabs-tabContent">

                        {/* content fly */}
                        <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                            <div className="grid grid-cols-8 gap-4">
                                {/* time line */}
                                <div className="flex w-100% col-span-3">
                                    <div >
                                        <div className="flex justify-between flex-col h-[170px] w-12">
                                            <div>
                                                <p className="font-semibold text-sm">21:40</p>
                                                <p className="font-normal text-xs">11 Feb</p>
                                            </div>
                                            <div>
                                                <p className="font-normal text-xs">1h 30m</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">21:40</p>
                                                <p className="font-normal text-xs">11 Feb</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* line */}
                                    <div>
                                        <div className="flex justify-between items-center w-[4px] flex-col h-[136px] mt-2 mx-4">
                                            <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                            <div className="border-l-[1px] border-blue-600 h-[170px]"></div>
                                            <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                        </div>
                                    </div>
                                    {/* dia diem */}
                                    <div className="flex justify-between flex-col w-full">
                                        <div>
                                            <p className="font-semibold text-sm">{item.StartPoint === "SGN" ? "Ho Chi Minh City" : item.StartPoint === "HPH" ? "Hai Phong City" : ""}&nbsp;({item.StartPoint})</p>
                                            <p className="font-normal text-xs">Tansonnhat Intl</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{item.EndPoint === "SGN" ? "Ho Chi Minh City" : item.EndPoint === "HPH" ? "Hai Phong City" : ""}&nbsp;({item.EndPoint})</p>
                                            <p className="font-normal text-xs">Noibai Intl</p>
                                        </div>
                                    </div>

                                </div>
                                {/* info */}
                                <div className="col-span-5">
                                    <div className="flex items-center">
                                        <div className="bg-bamboo-icon w-[30px] h-[30px] mr-3"></div>
                                        <div>
                                            <p className="font-semibold text-sm">{item.AirlineCode === "VJ" ? "VIETJET" : item.AirlineCode === "VN" ? "VIETNAM AIRLINE" : item.AirlineCode === "QH" ? "BAMBOO AIRWAYS" : ""}</p>
                                            <div className="flex items-center">
                                                <p className="font-normal text-xs">{item.FlightNumber} </p>
                                                <div className="bg-black w-[3px] h-[3px] flex items-center justify-center rounded-full  mx-1"></div>
                                                <p className="font-normal text-xs">{item.FareClass}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* deep info */}
                                    <div className="w-[100%]  bg-slate-100 rounded-xl mt-3">
                                        <div className="flex p-4">
                                            <div>
                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">Baggage </p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">{item.Freebag}</p>
                                                </div>

                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">In-flight</p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">Meal</p>
                                                </div>

                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">In-flight</p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">Entertainment</p>
                                                </div>
                                            </div>

                                            <div className="ml-14">

                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">Aircraft </p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">Airbus&nbsp;{item.RelatedFlights[0].Plane}</p>
                                                </div>

                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">Seat layout</p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">3-3</p>
                                                </div>

                                                <div className="flex items-center p-1">
                                                    <p className="font-normal text-sm">Seat pitch </p>
                                                    <p className="font-semibold text-indigo-600 text-sm ml-1">29 inches (standard)</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content fare info */}
                        <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                            <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                                <div className="grid grid-cols-8 gap-4">
                                    {/* time line */}
                                    <div className="flex w-100% col-span-3 flex-col">
                                        <div className="font-semibold text-sm">CONDITIONS</div>

                                        <div className="flex items-center mt-3">
                                            <div className="bg-bamboo-icon w-[30px] h-[30px] mr-3"></div>
                                            <div>
                                                <p className="font-semibold text-sm">{item.AirlineCode === "VJ" ? "VIETJET" : item.AirlineCode === "VN" ? "VIETNAM AIRLINE" : item.AirlineCode === "QH" ? "BAMBOO AIRWAYS" : ""}</p>
                                                <div className="flex items-center">
                                                    <p className="font-normal text-xs">{item.FlightNumber} </p>
                                                    <div className="bg-black w-[3px] h-[3px] flex items-center justify-center rounded-full  mx-1"></div>
                                                    <p className="font-normal text-xs">{item.SeatClass}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex mt-3">
                                                <p className="text-sm font-normal">{item.StartPoint === "SGN" ? "Ho Chi Minh City" : item.StartPoint === "HPH" ? "Hai Phong City" : ""}</p>
                                                <div className="flex items-center px-1">
                                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                                    <div className="border-b-[1px] border-blue-600 w-[50px]"></div>
                                                    <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                                </div>
                                                <p className="text-sm font-normal">{item.EndPoint === "SGN" ? "Ho Chi Minh City" : item.EndPoint === "HPH" ? "Hai Phong City" : ""}</p>
                                            </div>
                                            <div><p className="text-sm font-normal text-indigo-500">Economy</p></div>
                                            <div><p className="text-sm font-normal mt-3 pb-2">Non - Refundable</p></div>
                                        </div>
                                        <div></div>
                                        <div></div>

                                    </div>
                                    {/* info */}
                                    <div className="col-span-5">
                                        <div className="flex items-center">
                                            <div className="px-4 font-semibold text-sm">PRICE DETAILS</div>
                                        </div>
                                        {/* deep info */}
                                        <div className="w-[100%] mt-3">
                                            <div className="flex px-4 justify-between mr-[60px]">
                                                <div>
                                                    <p className="font-normal text-sm pb-1 ">Adult Basic Fare (x1)</p>
                                                    <p className="font-normal text-sm py-1 ">Tax</p>
                                                    <p className="font-normal text-sm py-1 ">Regular Total Price</p>
                                                    <p className="font-normal text-sm text-orange-300 py-1">Save</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm pb-1 ">1,326,000 vnd </p>
                                                    <p className="font-normal text-sm  py-1"> included</p>
                                                    <p className="font-normal text-sm  py-1"> 1,326,000 vnd</p>
                                                    <p className="font-normal text-sm py-1 ">-4,000 vnd</p>

                                                </div>
                                            </div>
                                            <div className="w-[100%] ">
                                                <div className="border-b-[1px] border-slate-200 w-full "></div>
                                                <div className="flex justify-between px-4 mr-[60px]">

                                                    <p className="font-normal text-sm py-1 ">You pay</p>
                                                    <p className="font-semibold  text-sm text-orange-600 py-1 ">1,322,000 vnd</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </>)
        })
    }

    return (
        <>
            {flyData && renderItem()}
        </>
    )
}
