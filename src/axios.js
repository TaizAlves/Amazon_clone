import axios from 'axios';

// the API (cloud function) URL 
const instance = axios.create({
    baseUrl: 'http://localhost:5001/clone-66464/us-central1/api'  
});

export default instance;