import React from 'react'
import { Booking } from './Booking/Booking'

export const HomePage = () => {
    return (<>
        <section>
            <p className="text-7xl font-extralight mt-28" >Hello!</p>
            <p className="text-7xl font-extralight">Where are</p>
            <p className="flex text-7xl font-extralight mb-20">you&nbsp;<p className="ext-7xl  font-semibold  text-indigo-700">flying</p>&nbsp;to ...</p>
            <Booking />
        </section>
    </>
    )
}
