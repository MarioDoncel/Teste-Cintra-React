import axios from "axios";

const api = axios.create({
  baseURL:`${process.env.REACT_APP_BASE_URL}`
})
export const apiGenres = axios.create({
  baseURL:`${process.env.REACT_APP_BASE_GENRES_URL}`
})

// api.defaults.headers.common = {
//   "Content-Type": "application/x-www-form-urlencoded"
// }

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('@Inter:Token') || ''
//   config.headers = {
//       'Authorization' : `Bearer ${token}`
//   }
//   return config
// })

export default api;
