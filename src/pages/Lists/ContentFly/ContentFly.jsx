import React from 'react'

export const ContentFly = () => {
    return (
        <section className="bg-stone-100 px-44 grid grid-flow-row grid-cols-4 gap-4 h-max" >
            <div className="row-span-4 col-span-3">
                {/* filter */}
                <div className="flex items-center justify-end pt-4 pb-1">
                    <p className="font-extralight text-xs tracking-widest pr-3">Filter</p>

                    <div class="flex justify-center">
                        <div class="px-1">
                            <select class="form-select appearance-none block w-32 px-3 py-2 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-whi focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected >Transit</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="px-1">
                            <select class="form-select appearance-none block w-32 px-3 py-2 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-whi focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Time</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="px-1">
                            <select class="form-select appearance-none block w-32 px-3 py-2 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-whi focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Airline</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="px-1">
                            <select class="form-select appearance-none block w-32 px-3 py-2 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-whi focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Low Price</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* item */}
                <div className="block px-4 pt-6 rounded-lg shadow-lg bg-white w-full">

                    <div className="flex items-center">

                        <div className="bg-bamboo-icon w-[30px] h-[30px] mr-3"></div>
                        <div>
                            <p className="text-sm font-semibold mr-9">BAMBOO AIRWAYS</p>
                        </div>
                        {/* time fly */}
                        <div className="flex items-center">
                            <div>
                                <p className="text-sm font-semibold">21:40</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>

                            <div className="">
                                <div className="items-center flex justify-center">
                                    <p className="font-normal text-sm">1h 30m</p>
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
                                <p className="text-sm font-semibold">23:10</p>
                                <div className="bg-dad-icon w-[33px] h-[21px]"></div>
                            </div>
                        </div>

                        {/* bagggage */}
                        <div className="px-7">
                            <div className=" flex items-center">
                                <div className="bg-bag-icon w-[14px] h-[14px] mx-2"></div>
                                <div>
                                    <p className="font-normal text-sm">Baggage 20kg</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-cutlery-icon w-[14px] h-[14px] mx-2"></div>
                                <div>
                                    <p className="font-normal text-sm">
                                        In-flight Meal
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* price */}
                        <div className="mr-4">
                            <p className="font-normal text-sm text-slate-500 line-through">1,326,000 vnd</p>
                            <p className="font-semibold text-sm">1,322,000 vnd</p>
                        </div>
                        <div>
                            <button className="btn-primary4 "  >Choose</button>
                        </div>
                    </div>

                    {/* info fly */}
                    {/* <div className="flex justify-center">
                        <div className="block  w-full">
                            <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                                <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Flight detail
                                </a>


                                <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Flight detail
                                </a>

                            </p>

                            <div className="collapse" id="collapseExample">
                                <div className="block  bg-white">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>

                            <div className="collapse" id="collapseExample2">
                                <div className="block  bg-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit laboriosam aliquid nihil obcaecati deleniti corrupti temporibus aliquam eligendi accusamus totam doloremque placeat veniam repellendus quidem blanditiis, nesciunt ullam aspernatur?
                                </div>
                            </div>

                        </div>
                    </div> */}

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

                    </ul>
                    {/* tab content */}
                    <div className="tab-content h-[235px]" id="tabs-tabContent">
                        {/* content fly */}
                        <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                            <div className="grid grid-cols-3 gap-4">
                                {/* time line */}
                                <div className="flex ">
                                    <div >
                                        <div className="flex justify-between flex-col h-[170px] w-10">
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
                                        <div className="flex justify-between items-center w-[4px] flex-col h-[136px] mt-2 mx-8">
                                            <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                            <div className="border-l-[1px] border-blue-600 h-[170px]"></div>
                                            <div className="bg-blue-600 w-1 h-1 flex items-center justify-center rounded-full "></div>
                                        </div>
                                    </div>
                                    {/* dia diem */}
                                    <div className="flex justify-between flex-col">
                                        <div>
                                            <p className="font-semibold text-sm">Da nang (DAD)</p>
                                            <p className="font-normal text-xs">Da Nang Airport</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">Ho Chi Minh City (SGN)</p>
                                            <p className="font-normal text-xs">Tansonnhat Intl</p>
                                        </div>
                                    </div>

                                </div>
                                {/* info */}
                                <div className="col-span-2">
                                    <div className="flex items-center">
                                        <div className="bg-bamboo-icon w-[30px] h-[30px] mr-3"></div>
                                        <div>
                                            <p className="font-semibold text-sm">BAMBOO AIRWAYS</p>
                                            <div className="flex items-center">
                                                <p className="font-normal text-xs">QH-183 </p>
                                                <div className="bg-black w-[3px] h-[3px] flex items-center justify-center rounded-full  mx-1"></div>
                                                <p className="font-normal text-xs">Economy</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* deep info */}
                                    <div className="w-[100%] h-[100px] bg-slate-100 rounded-xl mt-3">
                                        <div className="flex p-4">
                                            <div>
                                                <p className="font-normal text-sm">Baggage 20kg</p>
                                                <p className="font-normal text-sm">In-flight Meal</p>
                                                <p className="font-normal text-sm">In-flight Entertainment</p>
                                            </div>

                                            <div className="ml-14">
                                                <p className="font-normal text-sm">Aircraft Airbus A321</p>
                                                <p className="font-normal text-sm">Seat layout 3-3</p>
                                                <p className="font-normal text-sm">Seat pitch 29 inches (standard)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content fare info */}
                        <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                            Tab 2 content
                        </div>
                    </div>
                </div>


            </div>

            {/* dat ve */}
            <div className='row-span-1 '>
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
            </div>

        </section>
    )
}
