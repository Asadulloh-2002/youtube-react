import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Logger } from 'sass'
import { ChannelCard, Loader, VideoCard, Videos } from '../../components'
import { AppService } from '../../components/service/appservice'

const ChannelPage = () => {
    const { id } = useParams()
    const [channelDetail, setChannelDetail] = useState()
    const [video, setVideo] = useState([])
    useEffect(() => {
        const getData = async() => {
            try {
                const dataChannelDetail = await AppService.fetching(`channels?part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0])
                const dataVideo = await AppService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
                setVideo(dataVideo.items)   
            } catch (error) {
                console.log(error);
            }
        } 
        getData()
    }, [id])
    if(!channelDetail || !video) return <Loader />
    return (
        <Box minHeight={'95vh'} mt={'1vh'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'200px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <ChannelCard video={channelDetail} marginTop={'-100px'} />
            </Box>
            <Container maxWidth={'90%'}>
                {video && <Videos videos={video} />}
            </Container>
        </Box>
    ) 
}

export default ChannelPage