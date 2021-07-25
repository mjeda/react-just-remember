import React from 'react'
import { makeStyles, AppBar, Grid, Toolbar, IconButton, Badge, InputBase } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'

const styles = makeStyles({
    header:{
        backgroundColor:'#fff',
        transform: "translateZ(0)",
    },
    searchField:{
        fontSize: '0.8rem',
        padding: '0px, 8px',
        opacity: '0.6',

    }
})

function Header() {
    const classes = styles()
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item >
                        <InputBase
                            placeholder = 'search item'
                            startAdornment={ <SearchIcon fontSize="small" /> }
                        />
                    </Grid>
                    <Grid item sm />
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={6} color="primary">
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
