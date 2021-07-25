import { Grid } from '@material-ui/core'
import React from 'react'
import { UseForm, Form } from '../Components/UseForm'
import Input from '../Components/Control/Input'
import RadioGroup from '../Components/Control/RadioGroup'
import Select from '../Components/Control/Select'
import Checkbox from '../Components/Control/Checkbox'

const initialValues = {
    "firstName": "",
    "lastName": "",
    "gender": "male",
    "isActive": false
}

const genderItems = [
    {id: "male", title: "Male"},
    {id: "female", title: "Female"}
]

const selectItems = [
    {id: "abdul", title: "Abdul"},
    {id: "mohd", title: "Mohd"},
]

export default function UserForm() {
    const {
        values,
        // setValues,
        handleValueInput
    } = UseForm(initialValues)

    return (
        <>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Input
                            label="First Name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleValueInput}
                        />

                        <Select
                            name="sName"
                            label="Select Name"
                            items = {selectItems}
                        />

                        <Checkbox
                            label="Is Active"
                            name="isActive"
                            value={values.isActive}
                            onChange={handleValueInput}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Last Name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleValueInput}
                        />

                        <RadioGroup
                            label = "Gender"
                            name = "gender"
                            value={values.gender}
                            onChange={handleValueInput}
                            items = {genderItems}
                        /> 
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}
