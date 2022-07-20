import React from 'react'

export const Filter = () => {
    return (
        <><div className="flex items-center justify-end pt-4 pb-1">
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
        </div></>
    )
}
