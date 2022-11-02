import React, { useContext, useState } from 'react'
import { myContext } from '../contextApi/Context'
import Decrease from '../decrease/Decrease'
import Increase from '../increase/Increase'

const Count = () => {
    const data = useContext(myContext)
    const [count, setCount] = useState(data.count);
    return (
        <div>
            <h2>Count:{count}</h2>
            <Increase  countCondition="countCondition" count = {count} setCount={setCount}/>
            <Decrease  countCondition="countCondition" count = {count} setCount={setCount}/>
        </div>
    )
}

export default Count
