import React from 'react'
import PageHeader from '../Components/PageHeader';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import UserForm from './UserForm';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(themes => ({
    pageContent:{
        margin:themes.spacing(5),
        padding:themes.spacing(3)
    }
}))

export default function Users() {
    const classes = useStyles();

    return (
        <>
            <PageHeader
            title="Page One"
            subtitle="this page for sample text"
            icon={<PeopleAltIcon fontSize="medium" />}
            />
            <Paper className={classes.pageContent}>
                <UserForm/>
            </Paper>
        </>
    )
}
