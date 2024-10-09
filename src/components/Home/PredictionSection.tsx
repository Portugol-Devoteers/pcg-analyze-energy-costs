import { useState } from "react"
import { IPredictionData } from "../../interfaces/IPredictionData"
import { LineArea } from "../Charts/LineArea"
import { PredictionSelect } from "./PredictionSelect"

export const PredictionSection = () => {

    const [predictionData, setPredictionData] = useState<IPredictionData[] | null>(null)

    return (
        <section className="flex flex-col xl:flex-row gap-1 sm:px-20">
            <div className="xl:w-1/2 sm:px-0 px-3 ">
                <h1 className="mt-6 mb-4 sm:mt-4 text-4xl sm:text-5xl sm:mb-3 text-center sm:text-left">ENERGY SOME SOME</h1>
                <div className="sm:text-justify">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <br />
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