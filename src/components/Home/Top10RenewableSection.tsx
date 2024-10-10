import { useEffect, useState } from "react";
import { BarCh } from "../Charts/BarCh";
import axios from "axios";
import { ITop10Data } from "../../interfaces/ITop10Data";
import { useTranslation } from "react-i18next";

export const Top10RenewableSection = () => {

    const [top10RenewableData, setTop10RenewableData] = useState<ITop10Data[]>([]);

    const { t } = useTranslation();

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/top10_renewable").then(response => {
            // axios.get("https://pcg-analyze-energy-costs.onrender.com/top10_renewable").then(response => {
            if (response.data.code === 200) {
                setTop10RenewableData(response.data.data);
            }
        })
    }, []);

    return (
        <section className="flex flex-col-reverse xl:flex-row gap-1 sm:px-20 items-center mt-12 xl:mt-0">

            <div className="h-full xl:w-1/2 xl:ml-5">
                <BarCh
                    data={top10RenewableData}
                />
                <legend className="text-sm font-sans text-zinc-500">{t("home.top10.renewables.chart.legend")}</legend>

            </div>

            <div className="xl:w-1/2 sm:px-0 px-3 mb-14">
                <h1 className="text-4xl md:text-5xl sm:mb-3 text-center sm:text-left">{t("home.top10.renewables.title")}</h1>
                <div className="sm:text-justify">
                    <p>{t("home.top10.renewables.p1")}</p>
                    <br />
                    <p>{t("home.top10.renewables.p2")}</p>
                </div>
            </div>

        </section >
    )
};