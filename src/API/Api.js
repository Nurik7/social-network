import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3933e929-6970-4ee7-b1ef-3f09d928dcd8'
    }
})


export const usersAPI = {
    getFindUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    postToggleFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    deleteToggleFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuthUser() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfilePage(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}

export const settingsAPI = {
    uploadProfileAvatar(formData) {
        return axios.put('https://social-network.samuraijs.com/api/1.0/profile/photo', formData, {
            withCredentials: true,
            headers: {
                'API-KEY': '3933e929-6970-4ee7-b1ef-3f09d928dcd8',
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}