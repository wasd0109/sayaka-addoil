import React from 'react'
import { DAY_OF_SAYAKA_FALL } from "../constants/constants"
import { differenceInDays, } from 'date-fns';

export default function DateWidget() {
    const today = new Date();
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-lg mb-2'>今天是掛橋受傷後 </h2>
            <h1 className='text-xl'>第{" "}<span className='text-3xl'>{differenceInDays(today, DAY_OF_SAYAKA_FALL)}</span>{" "}天</h1>
        </div>
    )
}
