import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Container from '@mui/material/Container'
import Main from './pages/Main/Main'
import StatisticsCompany from './pages/StatisticsCompany/StatisticsCompany'
import Workers from './pages/Workers/Workers'
import { styles } from './styles/styles'

const App = () => {
    return (
        <Container maxWidth="xl" sx={styles.mainContainer}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/statistics" element={<StatisticsCompany />} />
                    <Route path="/workers" element={<Workers />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default App
