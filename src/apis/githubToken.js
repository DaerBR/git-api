import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token'
});