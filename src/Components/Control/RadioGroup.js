import {RadioGroup as MuiRadio, FormControlLabel, FormGroup, FormLabel, Radio } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {
    const {label, name, value, onChange, items, ...other } = props
    return (
        <FormGroup>
            <FormLabel>{ label }</FormLabel>
            <MuiRadio row 
                name = {name}
                value = {value}
                onChange ={ onChange }
            >
                {
                    items.map(
                        (item, index) => (
                            <FormControlLabel key={index} value={item.id} label= {item.title} control={<Radio />} />
                        )
                    )
                }
            </MuiRadio>
        </FormGroup>
    )
}
