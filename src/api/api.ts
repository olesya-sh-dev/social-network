import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1526cfeb-08ab-42c4-8d63-63741f5841f1",
    },
});

export const usersAPI = {
getUsers(currentPage :number=1, pageSize: number=10){
return instance.get(`users?page=${currentPage}&count=${pageSize}`)       
        .then((response) => {
          return response.data
        })

}
}
