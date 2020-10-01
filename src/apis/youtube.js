import axios from 'axios'

const KEY = 'AIzaSyCJPFMvUX0rlT802GrBtlaOtQGhpNfmK9U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY,
        type: 'Video',
        maxResults: 6,
    }
});
