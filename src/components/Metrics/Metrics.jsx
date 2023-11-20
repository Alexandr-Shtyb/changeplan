import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import BarChart from '../BarChart/BarChart'
import Button from '@mui/material/Button'
import Layout from '../Layout/Layout'
import {
  tabsWorkers,
  tabsPanelWorkers,
  tableCellWorkers,
} from '../../constans/commonConstans'
import mockData from '../../mock.json'
import { styles } from './styles'

const Metrics = () => {
  const [userData, setUserData] = useState({
    labels: mockData.itemsWorkerTable.map((item) => item.metric),
    datasets: [
      {
        label: 'Metrics',
        data: mockData.itemsWorkerTable.map((item) => item.stakeholders),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
          '#50AF95',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })

  return (
    <div style={styles.metricsWrapper}>
      <Box sx={styles.wrapperUpTitle}>
        <Box sx={styles.titleAndIconWrapper}>
          <ThumbUpIcon sx={styles.metricsIcon} />
          <Typography sx={styles.metricsTitle}>Adoption metrics</Typography>
        </Box>
        <Box>
          <Button variant="outlined">Learn more</Button>
        </Box>
      </Box>

      <Box sx={styles.barChartWrapper}>
        <BarChart chartData={userData} />
      </Box>

      <Layout
        tabs={tabsWorkers}
        tabsPanel={tabsPanelWorkers}
        titles={tableCellWorkers}
        data={mockData.itemsWorkerTable}
      />
    </div>
  )
}

export default Metrics
