import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { namePages } from '../../constans/commonConstans'
import { styles } from './styles'

const Common = ({ children, nameLogo }) => {
    const drawer = (
        <div>
            <Divider />
            <List>
                {namePages.map((item) => (
                    <Link key={item.id} to={item.endpoint} sx={styles.link}>
                        <ListItem disablePadding>
                            <ListItemButton sx={styles.listItemButton}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )

    return (
        <Box sx={styles.commonWrapper}>
            <CssBaseline />
            <AppBar position="fixed" sx={styles.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={styles.iconButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {nameLogo}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={styles.nav} aria-label="mailbox folders">
                <Drawer variant="permanent" sx={styles.drawer} open>
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={styles.main}>
                {children}
            </Box>
        </Box>
    )
}

export default Common
