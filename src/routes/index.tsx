import { useLayoutEffect, useState } from "react";
import {
    // HashRouter, // or //
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import {Home, About, MovieDetails } from '../pages/index';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { isAuth } from "../utils/isAuth";

function PrivateRoute({ children }:any) {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useLayoutEffect(()=>{
    (async ()=>{
      try {
        const authenticated = await isAuth()
        if(authenticated) {
          setAuth(true)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    })()
  },[])
  ;
  return  loading ? <Loading/> : auth ? children : <Navigate to="/signin" />;
}


  export const Router = ()=>{
    return(
      <BrowserRouter> 
        <Header/>
          <Routes>
            
            <Route path="/" element={ <PrivateRoute>
                                        < Home />
                                      </PrivateRoute> }/>          
            <Route path="/about" element={<PrivateRoute>
                                            <About />
                                          </PrivateRoute>}/>
            <Route path="/movies/:id" element={ <PrivateRoute>
                                                  <MovieDetails />
                                                </PrivateRoute>}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }

  

  export default Router
  