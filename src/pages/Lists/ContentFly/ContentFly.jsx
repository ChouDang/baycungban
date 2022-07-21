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

    const filterDataDay = () => {
        let array_time = str.split(" ");
        let time = array_time[3];
        let day = array_time[2];
        const
    }

    const filterTimeFly = Array(10000).fill().map((val, index) => {
        return {
            id: index,
            text: loremIpsum({
                count: 1,
                units: 'sentences',
                sentenceLowerBound: 4,
                sentenceUpperBound: 8
            })
        }
    })

    const filterBag = Array(10000).fill().map((val, index) => {
        return {
            id: index,
            text: loremIpsum({
                count: 1,
                units: 'sentences',
                sentenceLowerBound: 4,
                sentenceUpperBound: 8
            })
        }
    })


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
