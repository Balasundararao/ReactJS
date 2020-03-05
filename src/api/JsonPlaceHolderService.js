const axios = require('axios');

const JsonPlaceHolderService = {
    add: (num1, num2) => num1 + num2,
    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then( res => {
            return res.data
        })
        .catch(err => 'error');
    }
};
module.exports = JsonPlaceHolderService;