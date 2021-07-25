import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'
import React from 'react'

export default function Select(props) {
    const { name, label,value, onChange, items } = props
    return (
        <FormControl variant="outlined">
            <InputLabel>{ label }</InputLabel>
            <MuiSelect 
                label={label}
                name={name}
                value = {value}
                onChange={onChange}
            >
                {
                    items.map(
                        (item, index) => (
                            <MenuItem key={index} value={item.id}>{item.title}</MenuItem>
                        )
                    )
                }
            </MuiSelect>
        </FormControl>
    )
}
