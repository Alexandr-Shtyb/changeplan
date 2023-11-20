import React from 'react'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardBody from '../CardBody/CardBody'
import { icons, cardBodyNames } from '../../constans/commonConstans'
import { styles } from './styles'
import mockData from '../../mock.json'

const CardStatistics = ({ data }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Box sx={styles.titleAndIconWrapper}>
          <Typography sx={styles.title} gutterBottom>
            {data.title}
          </Typography>

          {icons[data.icon]}
        </Box>
        <div>
          <Stack direction="row" spacing={2}>
            {typeof data.body === 'object' ? (
              <>
                {mockData.dashboardsItem
                  .filter((item) => typeof item.body === 'object')
                  .map((item, index) => {
                    return (
                      <CardBody
                        key={item.id}
                        title={cardBodyNames[index]}
                        body={data.body[cardBodyNames[index]]}
                      />
                    )
                  })}
              </>
            ) : (
              <div style={styles.cardBody}>{data.body}</div>
            )}
          </Stack>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">{data.titleBtn}</Button>
      </CardActions>
    </Card>
  )
}

export default CardStatistics
