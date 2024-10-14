import { useEffect, useState } from "react"
import { IPredictionData } from "../../interfaces/IPredictionData"
import { PredictionSelect } from "./PredictionSelect"
import { LineArea } from "../Charts/LineArea"
import { useTranslation } from "react-i18next"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { CgTranscript } from "react-icons/cg";

export const PredictionSection = () => {

    const [predictionData, setPredictionData] = useState<IPredictionData[] | null>(null)

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [i18n]);
    const [isOpenModalTranscript, setIsOpenModalTranscript] = useState<boolean>(false);

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
                <label htmlFor="transcript" className="sr-only">
                    {t("home.predictionSection.transcript.title")}
                </label>
                <Button name="transcript" title={t("home.predictionSection.transcript.title")} onClick={() => setIsOpenModalTranscript(true)} className="mt-2 xl:mt-52 float-end mb-4 mr-8">
                    <CgTranscript />
                </Button>
                <LineArea
                    data={predictionData ? predictionData : undefined}
                />
                <PredictionSelect
                    setPredictionData={setPredictionData}
                />
                <Modal scrollBehavior="inside" size={"xl"} isOpen={isOpenModalTranscript} onClose={() => setIsOpenModalTranscript(false)}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader className="font-sans overflow-hidden !pb-10">{t("home.predictionSection.transcript.title")}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody className="font-sans">
                            {predictionData ? predictionData.map((data, index) => (
                                <p className="font-sans" key={index}><strong className="font-sans">{data.name}</strong>: {data.predição}</p>
                            )) : t("home.predictionSection.transcript.nodata")}
                        </ModalBody>

                        <ModalFooter className="font-sans !h-60">
                            <Button colorScheme="teal" mr={3} onClick={() => setIsOpenModalTranscript(false)}>
                                {t("home.predictionSection.transcript.close")}
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </section >
    )
}