import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./components/Layout"

export const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<></>} />
                    <Route path="powerbi" element={<></>} />
                </Route>

                <Route path="*" element={<h1>Not Found</h1>} />

            </Routes>
        </BrowserRouter>
    )
}