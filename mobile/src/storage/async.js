import AsyncStorage from "@react-native-async-storage/async-storage"

const USER_KEY = "@user"

export const storeUser = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(USER_KEY, jsonValue)
    } catch (e) {}
}

export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {}
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem(USER_KEY)
    } catch (e) {}
}