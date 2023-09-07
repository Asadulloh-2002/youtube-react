import { Box, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Category, Videos, Loader } from '../'
import { colors } from '../../constants/colors'
import { AppService } from '../service/appservice'
import styles from './Main.module.scss'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategoryHandler = category => setSelectedCategory(category)

    useEffect(() => {
        const getData = async () =>{
            try {
                const data = await AppService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
            }catch (error) {
                console.log(error);
            } 
        }
        getData()
    }, [selectedCategory])
    return (
        <Stack>
            <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />    
            <Box p={2}  sx={{height: '90vh'}} >
                <Container maxWidth ={'90%'}>
                    <Typography variant='h4' fontWeight={'bold'} mb={3}>
                        {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    {videos.length > 0 ? <Videos videos={videos} /> : <Loader /> }
                </Container>
            </Box>
        </Stack>
    )
}

export default Main