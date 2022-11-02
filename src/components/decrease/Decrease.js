import React from 'react'

const Decrease = (props) => {
    const Decrease = (props) => {
        if (props.count>0 || props.val>0) {
            if (props.countCondition) {
                props.setCount(props.count - 1)

            } else {
                props.setVal(props.val - 1)

            }
        }

    }
    return (
        <div>
            <button onClick={() => Decrease(props)} className="btn btn-danger my-3">Decrease</button>
        </div>
    )
}

export default Decrease
