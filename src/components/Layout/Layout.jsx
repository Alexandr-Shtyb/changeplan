import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TableCompany from '../Table/Table'
import Typography from '@mui/material/Typography'
import { styles } from './styles'

const Layout = ({ tabs, tabsPanel, titles, data }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const tabIndexProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  return (
    <Box sx={styles.tableWrapper}>
      <Box sx={styles.tabsWrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((item) => {
            return (
              <Tab
                key={item.id}
                label={item.label}
                {...tabIndexProps(item.index)}
              />
            )
          })}
        </Tabs>
      </Box>
      {tabsPanel.map((index) => (
        <CustomTabPanel value={value} index={index}>
          <TableCompany titles={titles} data={data} />
        </CustomTabPanel>
      ))}
    </Box>
  )
}

export default Layout
