import { Box, Container, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from "../"

const Videos = ({ videos }) => {
    return (
        <Container maxWidth={'90vh'}>
            <Stack
                width={'100%'}
                direction={'row'}
                flexWrap={'wrap'}
                justifyContent={'start'}
                gap={2.8}
            >
                {videos.map((item) => (
                    <Box key={item.id.videoId || item.id.channelId}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard video={item} />}
                    </Box>
                ))}
            </Stack>
        </Container>
    )
}

export default Videos