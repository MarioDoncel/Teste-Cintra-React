import { useJwt } from "react-jwt";


export const isAuth= () => {
  const token = localStorage.getItem('@Devfast:JWT')
  console.log(token)
  if(token){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const decoded = useJwt(token)
    console.log(decoded)
    return true
  }
  return false
}

  // if(typeof decoded !== 'object' || !decoded.sub) return