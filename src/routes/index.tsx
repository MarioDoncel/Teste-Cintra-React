import {
    // HashRouter, // or //
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import {Home, About, MovieDetails } from '../pages/index';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { PrivateRoute } from "./PrivateRoute";

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
  