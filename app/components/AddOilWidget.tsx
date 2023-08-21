import React from 'react'

type AddOilWidgetProps = {
    total: number;
    todayTotal: number;
    loading: boolean
}

export default function AddOilWidget({ total, todayTotal, loading }: AddOilWidgetProps) {
    return (
        <div className='text-center'>
            <div>
                <h2 className='text-lg'>今天集氣人數</h2>
                <h1 className='text-2xl'>{`${loading ? "-" : todayTotal}人`}</h1></div>
            <div>
                <h2 className='text-lg'>總集氣人數</h2>
                <h1 className='text-2xl'>{`${loading ? "-" : total}人`}</h1></div>
        </div>
    )
}
