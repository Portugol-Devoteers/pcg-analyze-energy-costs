// import LogoUnisantos from "./../assets/images/logo-unisantos.png";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

export const Header = () => {

    const [curLang, setCurLang] = useState<"pt" | "en">("pt");
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        if (curLang === "pt") {
            i18n.changeLanguage("en");
            setCurLang("en");
        } else {
            i18n.changeLanguage("pt");
            setCurLang("pt");
        }
    }

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
                        <Link to="/sobre">{t("header.about")}</Link>
                    </li>
                    <li>
                        <Link to="/powerbi">PowerBi</Link>
                    </li>
                    <li className="cursor-pointer" onClick={changeLang}>
                        <div className="flex w-12 gap-1">
                            {curLang === "pt" ? "EN" : "PT"}
                            <img
                                alt={curLang === "pt" ? "USA Flag" : "Bandeira do Brasil"}
                                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${curLang === "pt" ? "US" : "BR"}.svg`} />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}