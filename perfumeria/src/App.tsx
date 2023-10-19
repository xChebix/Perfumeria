import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import NavigationBar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Reviews from "./pages/Reviews";
import Login from "./pages/LogIn"
function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
      
     
    </Fragment>
  );
}

export default App;
