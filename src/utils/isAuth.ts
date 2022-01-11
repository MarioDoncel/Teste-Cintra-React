import { apiToken } from "../services/api"

export const isAuth= async () => {
  const {data:JWT} = await apiToken.get('/validate')
  console.log(JWT)
  if(JWT)return true
  return false
}
  