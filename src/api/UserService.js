import axios from 'axios';

class UserService {

    getUserHeader(){
        return axios.head('/')
    }

}

export default new UserService();