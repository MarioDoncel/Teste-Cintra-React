import {
    // HashRouter, // or //
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Home, About, MovieDetails } from '../pages/index';



  export const Router = ()=>{
    return(
      <BrowserRouter> 
        <Header/>
          <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/movies/:id" element={<MovieDetails />}/>
            <Route path="/signin" element={<About />}/>
            <Route path="/login" element={<About />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }

  export default Router
  