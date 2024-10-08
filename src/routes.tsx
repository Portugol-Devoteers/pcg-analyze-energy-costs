import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./components/Layout"

export const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>

                <Route path="*" element={<></>} />

            </Routes>
        </BrowserRouter>
    )
}