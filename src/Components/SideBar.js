import { makeStyles } from '@material-ui/core'
import React from 'react'


const styles = makeStyles({

    sideBar:{
        direction: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100%",
        backgroundColor: "#1b3058"
    }
})

export default function sideBar() {

    const classes = styles();

    return (
        <div className={classes.sideBar} >
            
        </div>
    )
}
