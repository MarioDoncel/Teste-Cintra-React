import axios from "axios";

const api = axios.create({
  baseURL:`${process.env.REACT_APP_BASE_URL}`
})
const apiGenres = axios.create({
  baseURL:`${process.env.REACT_APP_BASE_GENRES_URL}`
})

const apiUsers = axios.create({
  baseURL:`${process.env.REACT_APP_BASE_USERS_URL}`
})

// apiUsers.defaults.headers.common = {
//   "Content-Type": "application/x-www-form-urlencoded"
// }

// apiUsers.interceptors.request.use(config => {
//   const JWT = localStorage.getItem('@Devfast:JWT') || ''
//   config.headers = {
//       'Authorization' : `Bearer ${JWT}`
//   }
//   return config
// })



export {apiUsers, apiGenres}

export default api;
