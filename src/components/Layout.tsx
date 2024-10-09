import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Toaster } from "react-hot-toast"

export const Layout = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                    error: {
                        style: {
                            fontSize: '18px',
                            fontFamily: 'sans-serif',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: 'red',
                        },
                    },
                    success: {
                        style: {
                            fontSize: '18px',
                            fontFamily: 'sans-serif',
                        },
                    },
                }}
            />
        </div>
    )
}