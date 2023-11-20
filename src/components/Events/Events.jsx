import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'

const Events = ({ data }) => {
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={-1} orientation="vertical">
                {data.events.map((item) => (
                    <Step key={item.id}>
                        <StepLabel>{item.date}</StepLabel>
                        <Typography>{item.description}</Typography>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default Events
