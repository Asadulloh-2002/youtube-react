import { CheckCircle } from "@mui/icons-material"
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import moment from "moment"
import { Link } from "react-router-dom"
import { colors } from "../../constants/colors"

const VideoCard = ({ video }) => {
    return (
        <Card sx={{width: {xs: '100%', sm: '340px'}, boxShadow: 'none', borderRadius: '15px 15px 0 0' }}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia 
                    image={video?.snippet?.thumbnails?.high?.url} 
                    alt={video.snippet?.title} 
                    sx={{width: {xs: '100%', sm: '340px'}, height: '180px', cursor: 'pointer'}}
                />
            </Link>
            <CardContent
                sx={{backgroundColor: colors.primary, height: '200px', position: 'relative'}}
            >
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{opacity: '.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 35)}
                    </Typography>
                </Link>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >
                        <Avatar sx={{mr: '10px'}} src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography variant="subtitle2" color={'grey'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'grey', ml: '5px'}} />
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard