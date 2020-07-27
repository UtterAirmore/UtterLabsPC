import React, {useState} from "react"

import {FormControl, FormLabel, RadioGroup, Radio, FormControlLabel} from "@material-ui/core"

import styles from "./buildpage.module.scss"
import { getElementError } from "@testing-library/react"

function OptionButton(props) {
    return(
        <FormControlLabel className={styles.radio} key={props.id} value={props.id} control={<Radio color="primary" />} label={props.name} />
    )
}

function getInfo(arr, db) {
    const buildInfo = arr.map(x => {
        const info = db.find(info => info.id === x)
        return (
            <OptionButton name={info.name} id={info.id}/>            
        )
    })
    return (buildInfo)
}


function PartsInfo(props) {
    const [value, setValue] = useState(props.part[0]);

    const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value)
    };

    return(
        <div>
            {props.intGraphics===true ? (
                <FormControl component="fieldset" disabled>
                    <FormLabel component="legend">{props.type}</FormLabel>
                    <RadioGroup aria-label="part" name="part1" value={value} onChange={handleChange}>
                        {getInfo(props.part, props.db)}
                    </RadioGroup>
                </FormControl>
            ) : (
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{props.type}</FormLabel>
                        <RadioGroup aria-label="part" name="part1" value={value} onChange={handleChange}>
                            {getInfo(props.part, props.db)}
                        </RadioGroup>
                    </FormControl>
            )}
        </div>

  )
}

export default PartsInfo
