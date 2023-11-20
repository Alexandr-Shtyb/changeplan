import React from 'react'
import Box from '@mui/material/Box'
import { styles } from './styles'

const ItemScript = ({ date, description }) => {
    return (
        <Box sx={styles.itemScriptWrapper}>
            <Box sx={styles.itemScriptDate}>{date}</Box>
            <Box>{description}</Box>
        </Box>
    )
}

export default ItemScript
