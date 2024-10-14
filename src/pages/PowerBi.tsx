import { useTranslation } from "react-i18next";

export const PowerBi = () => {

    const { t } = useTranslation();

    return (
        <section className="mt-[126px] sm:mt-[106px]">
            <div className="w-screen h-screen">
                <iframe title="Power BI Final" width="100%" className="h-[calc(100%-126px)] sm:h-[calc(100%-106px)]" src="https://app.powerbi.com/view?r=eyJrIjoiZTc5YTU4MTktODIwZS00M2Q1LTk5MDQtZDRmYWY3NDI2OTFlIiwidCI6IjI5NDZhMjA5LWZhNzItNGE5ZS1hMTE0LWViYzhkNDNlNjcwYyJ9" frameBorder={0} allowFullScreen={true}></iframe>

            </div>

            <div>
                <div className="px-20">
                    <h2 className="text-2xl">
                        {t("powerbi.graph1.title")}
                    </h2>
                    <p>
                        {t("powerbi.graph1.description")}
                    </p>

                    <h2 className="text-2xl mt-4">
                        {t("powerbi.graph2.title")}
                    </h2>
                    <p>
                        {t("powerbi.graph2.description")}
                    </p>

                    <h2 className="text-2xl mt-4">
                        {t("powerbi.graph3.title")}
                    </h2>
                    <p>
                        {t("powerbi.graph3.description")}
                    </p>

                    <h2 className="text-2xl mt-4">
                        {t("powerbi.graph4.title")}
                    </h2>
                    <p>
                        {t("powerbi.graph4.description")}
                    </p>
                </div>

            </div>
        </section>
    )
}