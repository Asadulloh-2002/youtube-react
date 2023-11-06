import { Chat, CheckCircle, Comment, Tag, ThumbUp, Visibility } from '@mui/icons-material'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { Loader, Videos } from '../../components'
import { AppService } from '../../components/service/appservice'
import styles from './VideoPage.module.scss'

const VideoPage = () => {
    const { id } = useParams()
    const [reletedVideo, setReletedVideo] = useState()
    const [videoDetail, setVideoDetail] = useState()
    useEffect(()=> {
        const getData = async ()=> {
            try {
                const data = await AppService.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideoDetail(data.items[0])
                const reletedData = await AppService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                setReletedVideo(reletedData.items);
            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, [id])
    // console.log(reletedVideo);
    console.log(videoDetail);
    if(!videoDetail && !reletedVideo) return 
    return (
        <div>
            {!reletedVideo || !videoDetail ? <Loader /> : <Box minHeight={'90vh'} mb={10}>
                <Box display={'flex'} gap={5} padding={2} sx={{flexDirection: { xs: 'column', md: 'row'}}}>
                    <Box width={{xs: '100%', md: '75%'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={styles.card} controls />
                        {videoDetail.snippet.tags.map((items, idx) => (
                            <Chip 
                                label={items}
                                key={idx}
                                sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                                deleteIcon={<Tag />}
                                onDelete={() =>{}}
                            />
                        ))}
                        <Typography variant='h5' fontWeight='bold' p={2}>
                            {videoDetail.snippet.title}
                        </Typography>
                        <Stack direction={'row'} gap={'20px'} alignItems='center' py={1} px={3} >
                            <Stack sx={{opacity: '.7', cursor: "pointer"}} direction={'row'} alignItems='center' gap='5px'>
                                <Visibility />
                                {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                            </Stack>
                            <Stack sx={{opacity: '.7', cursor: "pointer"}} direction={'row'} alignItems='center' gap='5px'>
                                <ThumbUp />
                                {parseInt(videoDetail.statistics.likeCount).toLocaleString()} like
                            </Stack>
                            <Stack sx={{opacity: '.7', cursor: "pointer"}} direction={'row'} alignItems='center' gap='5px'>
                                <Chat />
                                {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comment
                            </Stack>
                        </Stack>
                        <Typography variant='subtitle2' p={2} sx={{opacity: '.7'}}>
                            {videoDetail.snippet.description}
                        </Typography>
                        <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                            <Stack direction={'row'} gap={'20px'} alignItems='center' py={1} px={3}>
                                <Stack direction={'row'} alignItems='center' gap={'10px'}>
                                    <Avatar 
                                        alt={videoDetail.snippet.channelTitle}
                                        src={videoDetail.snippet.thumbnails.default.url}
                                    />
                                    <Typography variant="subtitle2" color={'grey'}>
                                    {videoDetail.snippet.channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'grey', ml: '5px'}} />
                                </Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Box>
                    <Box width={{xs: '100%', md: '25%'}}>
                        {reletedVideo && <Videos videos={reletedVideo} />}
                    </Box>
                </Box>
            </Box>}
        </div>
    )
}

export default VideoPage