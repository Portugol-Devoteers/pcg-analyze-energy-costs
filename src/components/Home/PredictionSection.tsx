import { useEffect, useState } from "react"
import { IPredictionData } from "../../interfaces/IPredictionData"
import { PredictionSelect } from "./PredictionSelect"
import { LineArea } from "../Charts/LineArea"
import { useTranslation } from "react-i18next"

export const PredictionSection = () => {

    const [predictionData, setPredictionData] = useState<IPredictionData[] | null>(null)

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [i18n]);

    return (
        <section className="flex flex-col xl:flex-row gap-1 sm:px-20 xl:h-[calc(100vh-126px)] sm:h-[calc(100%-106px)] items-center mb-4 mt-2 xl:mt-0 sm:mt-6">
            <div className="xl:w-1/2 sm:px-0 px-3">
                <h1 className="text-4xl md:text-5xl sm:mb-3 text-center sm:text-left">{t("home.predictionSection.tittle")}</h1>
                <div className="sm:text-justify">
                    <p>
                        {t("home.predictionSection.p1")}
                    </p>
                    <br />
                    <p>
                        {t("home.predictionSection.p2")}
                    </p>
                </div>
            </div>
            <div className="h-full xl:w-1/2 xl:ml-5">
                <LineArea
                    data={predictionData ? predictionData : undefined}
                />
                <PredictionSelect
                    setPredictionData={setPredictionData}
                />
            </div>
        </section >
    )
}