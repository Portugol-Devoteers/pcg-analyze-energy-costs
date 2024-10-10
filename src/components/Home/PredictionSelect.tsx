import { Button, Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { IPredictionData } from '../../interfaces/IPredictionData'
import allCountries from "../../data/countries.json"
import allEnergyTypes from "../../data/energy_types.json"
import { useTranslation } from 'react-i18next'
import { API_HOST } from '../..'

interface Props {
    setPredictionData: (data: IPredictionData[]) => void
}

interface ICountry {
    country: string
    translated_country: string
}

interface IEnergyType {
    type: string
    translated_type: string
}

export const PredictionSelect = ({ setPredictionData }: Props) => {

    const [country, setCountry] = useState<string>('');
    const [years, setYears] = useState<number>(0);
    const [energyType, setEnergyType] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const countries: ICountry[] = allCountries as ICountry[];
    const energyTypes: IEnergyType[] = allEnergyTypes as IEnergyType[];

    const { t, i18n } = useTranslation();

    const [curLang, setCurLang] = useState<"pt" | "en">(navigator.language === "pt-BR" ? "pt" : "en");

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
        setCurLang(lng.startsWith("pt") ? "pt" : "en");


        const handleLanguageChange = (language: string) => {
            setCurLang(language.startsWith("pt") ? "pt" : "en");
        };

        i18n.on('languageChanged', handleLanguageChange);

        // return () => {
        //     i18n.off('languageChanged', handleLanguageChange);
        // };
    }, [i18n]);

    const handleSubmitPrediction = (event: FormEvent) => {
        event.preventDefault();

        if (isLoading) return;

        if (!country || !years || !energyType) {
            toast.error(t("home.predictionSection.error1"));
            return
        }
        if (years <= 0) {
            toast.error(t("home.predictionSection.error2"));
            return
        }

        setIsLoading(true);

        axios.get(`${API_HOST}/${country}/${energyType}/${years}`).then(response => {
            // // axios.get(`http://127.0.0.1:5000/predict/${country}/${energyType}/${years}`).then(response => {
            if (response.data.code === 200) {
                setPredictionData(response.data.data);
                toast.success(t("home.predictionSection.success"));
            } else {
                toast.error(response.data.message);
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className="xl:ml-5 ml-0 mt-3 w-full px-10 flex gap-1 font-sans justify-center items-center flex-col 2xl:flex-row">
            <div className="flex gap-1">
                <label htmlFor="country" className='sr-only'>{t("home.predictionSelect.placeholder1")}</label>
                <Select
                    name="country"
                    aria-label={t("home.predictionSelect.placeholder1")}
                    className="font-sans placeholder:font-sans"
                    size="sm"
                    placeholder={t("home.predictionSelect.placeholder1")}
                    onChange={(event) => setCountry(event.target.value)}
                >
                    {
                        countries.map((country, index) => (
                            <option key={index} value={country.country}>
                                {curLang === "pt" ? country.translated_country : country.country}
                            </option>
                        ))
                    }
                </Select>

                <label htmlFor="years" className='sr-only'>{t("home.predictionSelect.placeholder3")}</label>
                <Input
                    className="placeholder:font-sans font-sans"
                    size="sm"
                    placeholder={t("home.predictionSelect.placeholder2")}
                    aria-label={t("home.predictionSelect.placeholder3")}
                    type="number"
                    name="years"
                    onChange={(event) => setYears(Number(event.target.value))}
                />

                <label htmlFor="energyType" className='sr-only'>{t("home.predictionSelect.placeholder4")}</label>
                <Select
                    className="font-sans placeholder:font-sans"
                    name="energyType"
                    size="sm"
                    aria-label={t("home.predictionSelect.placeholder4")}
                    placeholder={t("home.predictionSelect.placeholder4")}
                    onChange={(event) => setEnergyType(event.target.value)}
                >
                    {
                        energyTypes.map((energyType, index) => (
                            <option key={index} value={energyType.type}>{curLang === "pt" ? energyType.translated_type : energyType.type}</option>
                        ))
                    }
                </Select>
            </div>
            <Button
                onClick={handleSubmitPrediction}
                size="sm"
                className="px-5 lg:mt-0 mt-2 2xl:w-auto w-full !bg-[#002856] !text-white hover:!bg-[#2a4c72] "
            >
                {isLoading ? t("home.predictionSelect.button.loading") : t("home.predictionSelect.button")}
            </Button>
        </div>
    )
}