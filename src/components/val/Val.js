import React, { useContext, useState } from 'react'
import { myContext } from '../contextApi/Context'
import Decrease from '../decrease/Decrease'
import Increase from '../increase/Increase'

const Val = () => {
    const data = useContext(myContext)
    const [val, setVal] = useState(data.val)
    return (
        <div>
            <h2>val:{val}</h2>
            <Increase valCondition = "valCondition" setVal = {setVal} val = {val} />
            <Decrease valCondition = "valCondition" setVal = {setVal} val = {val}/>
        </div>
    )
}

export default Val
