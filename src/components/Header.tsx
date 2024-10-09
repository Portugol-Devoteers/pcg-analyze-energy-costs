// import LogoUnisantos from "./../assets/images/logo-unisantos.png";

import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-white w-full fixed flex flex-col justify-center items-center gap-3 sm:gap-0 sm:flex-row sm:justify-between sm:items-center border py-3 z-50">
            <div className="flex flex-col justify-center items-center sm:flex-row sm:ml-20">
                <img src={"https://raichu-uploads.s3.amazonaws.com/logo_universidade-catolica-de-santos-unisantos_p3LL3R.png"} alt="Logotipo da Unisantos" className="w-10 sm:w-20" />
                <h3 className="mt-0 sm:mt-2">Portugol Devoters</h3>
            </div>
            <nav className="sm:mr-20">
                <ul className="flex gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/powerbi">PowerBi</Link>
                    </li>
                    <li>
                        <a href="#">EN</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}