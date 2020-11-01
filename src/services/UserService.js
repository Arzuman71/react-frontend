import axios from "axios";


const USERS_API_URL = 'http://localhost:8080/users';
const USER_REGISTER_API_URL = 'http://localhost:8080/user';

class UserService {

    getUsers(){
        return axios.get(USERS_API_URL);
    }

    register(userRegister){
        return axios.post(USER_REGISTER_API_URL, userRegister);
    }
}


export default new UserService();