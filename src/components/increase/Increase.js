import React from 'react'

const Increase = (props) => {
    const Increase = (props) => {
        if (props.countCondition) {
            props.setCount(props.count + 1)
        } else {
            props.setVal(props.val + 1)

        }

    }
    return (
        <div>
            <button onClick={() => Increase(props)} className="btn btn-primary">Increase</button>
        </div>
    )
}

export default Increase
