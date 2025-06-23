// Path: Backend/Frontend/api/hackathonApi.js

import axios from 'axios';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const BASE_URL = 'http://192.168.10.149:5000/api'; // <--- Make sure it's exactly this
=======
const BASE_URL = 'http://198.168.10.149:5000/api'; // <--- Make sure it's exactly this
>>>>>>> Stashed changes
=======
const BASE_URL = 'http://198.168.10.149:5000/api'; // <--- Make sure it's exactly this
>>>>>>> Stashed changes
=======
const BASE_URL = 'http://198.168.10.149:5000/api'; // <--- Make sure it's exactly this
>>>>>>> Stashed changes

const hackathonApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default hackathonApi;