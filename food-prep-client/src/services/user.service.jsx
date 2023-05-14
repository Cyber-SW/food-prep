import axios from "axios"


class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    fetchUserData = (userId) => {
        return this.api.get(`api/user/${userId}`)
    }

    storeUserAppState = (userId, appState) => {
        return this.api.post(`api/user/${userId}/update-state`, { appState: appState })
    }

    fetchUserMeal = (userId, newMeal) => {
        console.log("request body", newMeal)
        return this.api.post(`api/user/${userId}/new-meal`, { newMeal: newMeal })
    }

    fetchMealImage = (newMealName) => {
        console.log("request picture", newMealName)
        return this.api.get(`api/user/new-meal/${newMealName}`)
    }
}

const userService = new UserService();

export default userService;