// api.js or wherever you handle the API calls
import axios from 'axios';

const API_KEY = 'AIzaSyCHPWkw15Lun6DIwtJqZwCC36v5cS_F0q4';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const searchVideos = async (query, pageToken = '') => {
    const response = await axios.get(BASE_URL, {
        params: {
            part: 'snippet',
            maxResults: 6,
            q: query,
            type: 'video',
            key: API_KEY,
            pageToken, // Token for the next page
        },
    });

    return {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken, // Token for the next set of results
        prevPageToken: response.data.prevPageToken || '', // Token for previous set, if available
    };
};

