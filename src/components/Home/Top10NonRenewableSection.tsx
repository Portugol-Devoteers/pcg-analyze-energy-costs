import { useEffect, useState } from "react";
import { BarCh } from "../Charts/BarCh";
import axios from "axios";
import { ITop10Data } from "../../interfaces/ITop10Data";
import { useTranslation } from "react-i18next";

export const Top10NonRenewableSection = () => {

    const [top10NonRenewableData, setTop10NonRenewableData] = useState<ITop10Data[]>([]);

    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`/api/top10_nonrenewable`).then(response => {
            // axios.get("http://127.0.0.1:5000/top10_nonrenewable").then(response => {
            if (response.data.code === 200) {
                setTop10NonRenewableData(response.data.data);
            }
        })
    }, []);

    return (
        <section className="flex flex-col xl:flex-row gap-1 sm:px-20 items-center mt-6 sm:mt-24">

            <div className="xl:w-1/2 sm:px-0 px-3 mb-14">
                <h1 className="text-4xl md:text-5xl sm:mb-3 text-center sm:text-left">{t("home.top10.nonRenewables.title")}</h1>
                <div className="sm:text-justify">
                    <p>{t("home.top10.nonRenewables.p1")}</p>
                    <br />
                    <p>{t("home.top10.nonRenewables.p2")}</p>
                </div>
            </div>
            <div className="h-full xl:w-1/2 xl:ml-5">
                <BarCh
                    data={top10NonRenewableData}
                />
                <legend className="text-sm font-sans text-zinc-500">{t("home.top10.nonRenewables.chart.legend")}</legend>

            </div>

        </section >
    )
};