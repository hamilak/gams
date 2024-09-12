import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScholarshipPage from "./pages/ScholarshipPage"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/scholarship" element={<ScholarshipPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing