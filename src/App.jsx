import React from "react";
import { Navbar } from "./Components";
import {  Home,Landing } from "./Pages";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
	return (
		<div>
        <Router>
            <Navbar />
            <Routes>
               <Route  exact path="/" element={<Landing/>} />
                <Route  path="/home" element={<Home/>} />
                    
               
            </Routes>
           
        </Router>
			
			
		</div>
	);
}

export default App;