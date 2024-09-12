import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing