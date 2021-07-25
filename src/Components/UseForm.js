import {useState} from 'react'
import { makeStyles } from '@material-ui/core'

export function UseForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    const handleValueInput = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return {
        values,
        setValues,
        handleValueInput
    }
}

const styles = makeStyles(themes => ({
    root:{
        "& .MuiFormControl-root":{
            width: "95%",
            margin:themes.spacing(1)
        }
    }
}))

export function Form (props){
    const classes = styles()

    return (
        <form className={classes.root} >
            {props.children}
        </form>
    )
}
