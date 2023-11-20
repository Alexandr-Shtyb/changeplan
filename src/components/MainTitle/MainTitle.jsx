import React from 'react'
import Typography from '@mui/material/Typography'
import { styles } from './styles'

const MainTitle = ({ title }) => {
    return (
        <Typography variant="h6" component="h2" sx={styles.mainTitle}>
            {title}
        </Typography>
    )
}

export default MainTitle
