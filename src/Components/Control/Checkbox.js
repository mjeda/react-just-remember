import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'
import React from 'react'

export default function Checkbox(props) {
    const {name, value, label, onChange} = props
    const allowCheckbox = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <FormControlLabel
            label={label}
            control={<MuiCheckbox
                name={name}
                checked={value}
                onChange = {e => onChange(allowCheckbox(name, e.target.checked))}
            />}
        />
    )
}
