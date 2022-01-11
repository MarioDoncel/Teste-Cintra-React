import jwtDecode from "jwt-decode"
import { apiUsers } from "../api"
type TDecodedJWT ={ 
  sub:string;
  iat:number;
  exp:number;
}

export const getUser = async (JWT:string) => {
  const decoded:TDecodedJWT = jwtDecode(JWT)
  const {sub:userId} = decoded
  const {data:user} = await apiUsers.get(`${userId}`)
  return user
}
