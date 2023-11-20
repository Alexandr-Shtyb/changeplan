import React from 'react'
import Grid from '@mui/material/Grid'
import Events from '../../components/Events/Events'
import ItemNews from '../../components/ItemNews/ItemNews'
import ItemScript from '../../components/ItemScript/ItemScript'
import MainTitle from '../../components/MainTitle/MainTitle'
import mockData from '../../mock.json'
import { styles } from './styles'

const GridLayout = () => {
    return (
        <Grid container spacing={2} sx={styles.gridContainerMainPage}>
            <Grid item xs={4} sx={styles.gridItem}>
                <MainTitle title="Новости" />

                {mockData.news.map((item) => {
                    return (
                        <ItemNews
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })}
            </Grid>
            <Grid item xs={4} sx={styles.gridItem}>
                <MainTitle title="События" />

                <Events data={mockData} />
            </Grid>
            <Grid item xs={4} sx={styles.gridItem}>
                <MainTitle title="Опубликованные сценарии и ключевые метрики" />

                {mockData.scripts.map((item) => {
                    return (
                        <ItemScript
                            key={item.id}
                            date={item.date}
                            description={item.description}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default GridLayout
