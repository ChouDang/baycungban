import React, { useEffect } from 'react'
import { Filter } from '../Filter/Filter'
import { ListsItem } from '../ListsItem/ListsItem'
import { PayFly } from '../PayFly/PayFly'
import { useDispatch, useSelector } from "react-redux";
import { action } from '../../../redux/actions/action';

export const ContentFly = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action());
    }, []);

    const flyData = useSelector(
        (state) => state.flyReducer.flyData
    );



    return (
        <section className="bg-stone-100 px-44 grid grid-flow-row grid-cols-4 gap-4 h-max" >
            <div className="row-span-4 col-span-3">
                {/* filter */}
                <Filter />
                {/* item */}

                {flyData && (<ListsItem flyData={flyData.Flights} />)}

            </div>
            {/* dat ve */}
            <PayFly />
        </section>
    )
}
