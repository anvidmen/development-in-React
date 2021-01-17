import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyCfT2qOxrm81- VxGs4RI5E654bhXQDjBm4'
  }
})
