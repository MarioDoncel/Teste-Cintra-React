import { apiToken } from "../services/api"

export const isAuth= async () => {
  const {data:JWT} = await apiToken.get('/validate')
  if(JWT)return JWT
  return false
}
  