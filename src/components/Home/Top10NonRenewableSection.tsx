import { useEffect, useState } from "react";
import { BarCh } from "../Charts/BarCh";
import axios from "axios";
import { ITop10NonRenewableData } from "../../interfaces/ITop10Data";

export const Top10NonRenewableSection = () => {

    const [top10NonRenewableData, setTop10NonRenewableData] = useState<ITop10NonRenewableData[]>([]);

    useEffect(() => {
        axios.get("https://pcg-analyze-energy-costs.onrender.com/top10_nonrenewable").then(response => {
            // axios.get("http://127.0.0.1:5000/top10_nonrenewable").then(response => {
            if (response.data.code === 200) {
                setTop10NonRenewableData(response.data.data);
            }
        })
    }, []);

    return (
        <section className="flex flex-col xl:flex-row gap-1 sm:px-20 items-center mt-6 sm:mt-24">

            <div className="xl:w-1/2 sm:px-0 px-3 mb-14">
                <h1 className="text-4xl md:text-5xl sm:mb-3 text-center sm:text-left">Top10 Não Renováveis</h1>
                <div className="sm:text-justify">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="h-full xl:w-1/2 xl:ml-5">
                <BarCh
                    data={top10NonRenewableData}
                />
            </div>

        </section >
    )
};