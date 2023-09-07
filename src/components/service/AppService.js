import axios from 'axios'

const BASE_URL = 'youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '145bacff28mshfc13397cfc57804p1fcccejsn606304f931a1',
        'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com"
    }
}

export const AppService = {
    async fetching(url) {
        const res = await axios.get(`https://${BASE_URL}/${url}`, options)
        return res.data
    }
}
