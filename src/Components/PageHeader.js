import { Paper, Typography, makeStyles, Card} from '@material-ui/core'
import React from 'react'


const style = makeStyles(theme => ({
    root:{
        backgroundColor: "#fdfdff"
    },
    pageHeader:{
        display: "flex",
        padding: theme.spacing(4),
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        padding:theme.spacing(2),
        display:"inline-block",
        color:"#1b3058"
    },
    pageTitle:{
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:"0.6"
        }
    }
}))

export default function PageHeader(prop) {
    const {icon, title, subtitle } = prop;
    const classes = style()
    return (
        <Paper elevation={0} className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant='h6' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='subtitle2' component='div'>
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
