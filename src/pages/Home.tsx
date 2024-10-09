import { PredictionSection } from "../components/Home/PredictionSection"
import { Top10RenewableSection } from "../components/Home/Top10RenewableSection"


export const Home = () => {

    return (
        <main className="mt-[126px] sm:mt-[106px]">
            <PredictionSection />
            <Top10RenewableSection />
        </main>
    )
}