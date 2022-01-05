import {
    // HashRouter, // or //
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
  import {Home, Page2} from '../pages/index';


  export const Router = ()=>{
    return(
      <BrowserRouter> 
        <Header/>
          <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={<Page2 />}/>
            <Route path="/movies/:id" element={<Page2 />}/>
            <Route path="/signin" element={<Page2 />}/>
            <Route path="/login" element={<Page2 />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }

  export default Router
  