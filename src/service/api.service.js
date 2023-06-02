import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {    
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': '5fb4ba6ba4mshb164e12d9ebfaeap14b4e1jsn2d8f599ab0b6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}