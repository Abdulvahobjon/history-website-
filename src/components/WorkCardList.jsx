import React from 'react'
import CardWork from './CardWork'
import Data from "../data/Data"

function WorkCardList() {
    return (
        <div
            className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12"
            >
            {
                Data.map(item => {
                return <CardWork key={item} item={item} />
                 })
            }
        </div>
    )
}

export default WorkCardList