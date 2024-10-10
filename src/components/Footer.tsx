import { useTranslation } from "react-i18next"

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="mt-10 md:mt-32">
            <div className="bg-[#002856] text-white text-center py-4">
                <p>&copy; 2024 - {t("footer.copy")}</p>
            </div>
        </footer>
    )
}