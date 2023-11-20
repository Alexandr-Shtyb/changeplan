import HomeIcon from '@mui/icons-material/Home'
import AssessmentIcon from '@mui/icons-material/Assessment'
import EngineeringIcon from '@mui/icons-material/Engineering'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import ListIcon from '@mui/icons-material/List'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import GetAppIcon from '@mui/icons-material/GetApp'
import WarningIcon from '@mui/icons-material/Warning'
import CampaignIcon from '@mui/icons-material/Campaign'

export const namePages = [
  { id: '1', name: 'Main', icon: <HomeIcon />, endpoint: '/' },
  {
    id: '2',
    name: 'Statistics',
    icon: <AssessmentIcon />,
    endpoint: '/statistics',
  },
  {
    id: '3',
    name: 'Workers',
    icon: <EngineeringIcon />,
    endpoint: '/workers',
  },
]

export const icons = {
  assignment: <AssignmentTurnedInIcon sx={{ fontSize: '35px' }} />,
  list: <ListIcon sx={{ fontSize: '35px' }} />,
  people: <PeopleOutlineIcon sx={{ fontSize: '35px' }} />,
  impact: <GetAppIcon sx={{ fontSize: '35px' }} />,
  risk: <WarningIcon sx={{ fontSize: '35px' }} />,
  activities: <CampaignIcon sx={{ fontSize: '35px' }} />,
}

export const cardBodyNames = ['completed', 'total', 'overdue']

export const tabs = [
  { id: 1, label: 'Previous week', index: 0 },
  { id: 2, label: 'This week', index: 1 },
  { id: 3, label: 'Next week', index: 2 },
]

export const tabsWorkers = [{ id: 1, label: 'Adoption', index: 0 }]

export const tabsPanel = [0, 1, 2]
export const tabsPanelWorkers = [0]

export const tableCellStatistics = [
  'DUE',
  'INTERVENTION',
  'TITLE',
  'TARGET AUDIENCE',
  'TIME AWAY FROM BAU',
  'CHANGE FASE',
]
export const tableCellWorkers = [
  'DATA',
  'METRIC',
  'STAKEHOLDERS',
  'RESPONSES',
  'MANUAL SCORE',
  'AGGREGATED SCORE',
  'PHASE',
  'NOTES',
]
