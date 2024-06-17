import axios from "axios";
import { UserProfileType } from "../components/Profile/ProfileContainer";
import { AuthResponseDataType } from "../components/Header/HeaderContainer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1526cfeb-08ab-42c4-8d63-63741f5841f1",
  },
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId: number) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
}
export const authAPI = {
  me() {
    return instance.get<AuthResponseDataType>(`auth/me`);
  },
};
