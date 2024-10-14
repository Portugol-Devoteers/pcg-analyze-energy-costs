import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export const About = () => {

    const { t } = useTranslation();

    return (
        <main className="mt-[126px] sm:mt-[106px] sm:px-20 px-2">
            <div>
                <h1 className="text-4xl py-5">{t("about.title1")}</h1>
                <p>{t("about.p1")}</p>
            </div>
            <div className="mt-4">
                <a className="font-sans" href="https://github.com/Portugol-Devoteers/pcg-analyze-energy-costs" target="_blank">
                    <Button variant={"outline"}>
                        {t("about.github")}
                        <FaGithub className="ml-2" />
                    </Button>
                </a>
            </div>

            <div className="mt-3">
                <h1 className="text-4xl py-5">{t("about.members")}</h1>
                <ul className="ml-0 font-sans">
                    <li className="py-2 flex">
                        Felipe Barbosa dos Santos

                        <a href="https://www.linkedin.com/in/felipe1501/" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Felipe1501" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:felipebsantos@unisantos.br" className="ml-2 mt-1">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li className="py-2 flex">
                        João Gabriel Henriques Cardoso

                        <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-henriques-cardoso-67463a1b7/" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/joaocatal4o" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:joaogabriel@unisantos.br" className="ml-2 mt-1">
                            <FaEnvelope />
                        </a>
                    </li>

                    <li className="py-2 flex">
                        Lucas Carmona Neto

                        <a href="https://www.linkedin.com/in/lucas-carmona-neto/" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/lucascarmon4" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:lucas.carmona@unisantos.br" className="ml-2 mt-1">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li className="py-2 flex">
                        Lucas Cerqueira Galvão

                        <a href="https://www.linkedin.com/in/lucas-cerqueira-galvao/" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/lucascerqueiragalvao" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:lucas.g@unisantos.br" className="ml-2 mt-1">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li className="py-2 flex">
                        Pedro Henrique Bonifacio Martins
                        <a href="https://www.linkedin.com/in/pedrobonifaciom/" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/pedrobonifacio" className="ml-2 mt-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:pedro.martins@unisantos.br" className="ml-2 mt-1">
                            <FaEnvelope />
                        </a>
                    </li>

                </ul>
            </div>

            <div className="mt-3">
                <h1 className="text-4xl py-5">{t("about.tech.title")}</h1>
                <p>{t("about.tech.p")}</p>
                <ul className="ml-0 font-sans list-disc list-inside">
                    <li className="py-1">
                        <strong>React:</strong> {t("about.tech.react")}
                    </li>
                    <li className="py-1">
                        <strong>Python:</strong> {t("about.tech.python")}
                    </li>
                    <li className="py-1">
                        <strong>Pandas:</strong> {t("about.tech.pandas")}
                    </li>
                    <li className="py-1">
                        <strong>PowerBI:</strong> {t("about.tech.powerbi")}
                    </li>
                    <li className="py-1">
                        <strong>Flask:</strong> {t("about.tech.flask")}
                    </li>
                    <li className="py-1">
                        <strong>IFrame:</strong> {t("about.tech.iframe")}
                    </li>
                </ul>
            </div>

        </main>
    )
}