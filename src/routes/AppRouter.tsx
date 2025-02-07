import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login";
import Signup from "@/Pages/Signup";


const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter