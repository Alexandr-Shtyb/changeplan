import React from 'react'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import { ListItem } from '@mui/material'
import CardStatistics from '../CardStatistics/CardStatistics'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Layout from '../Layout/Layout'
import {
  tabs,
  tabsPanel,
  tableCellStatistics,
} from '../../constans/commonConstans'
import mockData from '../../mock.json'
import { styles } from './styles'

const Dashboard = () => {
  const [value, setValue] = React.useState(0)

  return (
    <div style={styles.dashboardWrapper}>
      <Box sx={styles.titleAndIconWrapper}>
        <DashboardIcon sx={styles.dashboardIcon} />
        <Typography sx={styles.dashboardTitle}>Dashboard</Typography>
      </Box>
      <List sx={styles.dashboardList}>
        {mockData.dashboardsItem.map((item) => {
          return (
            <ListItem key={item.id} sx={styles.dashboardListItem}>
              <CardStatistics data={item} />
            </ListItem>
          )
        })}
      </List>

      <Typography sx={styles.dashboardStatus}>Status</Typography>
      <Layout
        tabs={tabs}
        tabsPanel={tabsPanel}
        titles={tableCellStatistics}
        data={mockData.activities}
      />
    </div>
  )
}

export default Dashboard
