import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader, Videos } from '../../components'
import { AppService } from '../../components/service/appservice'
import { colors } from '../../constants/colors'

const SearchPage = () => {
    const [ videos, setVideos] = useState('')
    const { id } = useParams()
    useEffect(()=> {
        const getData = async () => {
            try{
                const data = await AppService.fetching(`search?part=snippet&q=${id}`)
                setVideos(data.items)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id])
    return (
        <Box p={2} sx={{height: '90vh'}}>
            <Container maxWidth={'90vh'}>
                <Typography variant='h4' fontWeight='bold' mb={2}>
                    Search result for <span style={{color: colors.secondary}}>{id}</span> videos
                </Typography>
                {videos.length > 0 ? <Videos videos={videos} /> : <Loader /> }
            </Container>
        </Box>
    )
}

export default SearchPage