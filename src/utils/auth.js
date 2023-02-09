// import localStorage from 'react-native-sync-localstorage'
const localStorage = require('react-native-sync-localstorage')
export const login = async () => {
    console.log("IN LOGIN STATE");
    await localStorage.setItem('key', "LOGGED_IN");
    console.log(localStorage.getItem('key'))
}
export const logout = () => {
    localStorage.removeItem('key');
}
export const loginState = () => {
    return localStorage.getItem('key');
}