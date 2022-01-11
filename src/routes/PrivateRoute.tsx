import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getUser } from "../services/resources/user";
import { logUser } from "../store/user.store";
import { isAuth } from "../utils/isAuth";

export function PrivateRoute({ children }:any) {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useLayoutEffect(()=>{
    (async ()=>{
      try {
        const JWT = await isAuth()
        if(JWT) {
          setAuth(true)
          setLoading(false)
          const {username, email, _id:id} = await getUser(JWT)
          dispatch(logUser({email, id, username}))
        }
      } catch (error) {
        setLoading(false)
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  ;
  return  loading ? <Loading/> : auth ? children : <Navigate to="/signin" />;
}
