import React from "react"

import {Badge} from "react-bootstrap"

const Current = (props) => {
    return(
        <h5><Badge variant="secondary">{props.type}</Badge> {props.name}</h5>
    )
}

const CurrentInfo = (props) => {
    return(
        <div>
            <Current type="Processor" name={props.currentcpu.name} />
            <Current type="Video Card" name={props.currentgpu.name} />
            <Current type="Motherboard" name={props.currentmobo.name} />
            <Current type="Ram" name={props.currentram.name} />
            <Current type="Storage" name={props.currentstorage.name} />
            <Current type="Power Supply" name={props.currentpsu.name} />
        </div>
    )
}

export default CurrentInfo