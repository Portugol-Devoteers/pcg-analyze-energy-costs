import { Button, Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import axios from 'axios'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { IPredictionData } from '../../interfaces/IPredictionData'
import allCountries from "../../data/countries.json"
import allEnergyTypes from "../../data/energy_types.json"

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

    const countries: ICountry[] = allCountries;
    const energyTypes: IEnergyType[] = allEnergyTypes;

    const handleSubmitPrediction = (event: FormEvent) => {
        event.preventDefault();

        if (isLoading) return;

        if (!country || !years || !energyType) {
            toast.error("Preencha todos os campos!")
            return
        }
        if (years <= 0) {
            toast.error("A quantidade de anos deve ser maior que 0.")
            return
        }

        setIsLoading(true);

        // axios.get(`https://pcg-analyze-energy-costs.onrender.com/predict/${country}/${energyType}/${years}`).then(response => {
        axios.get(`http://127.0.0.1:5000/predict/${country}/${energyType}/${years}`).then(response => {
            if (response.data.code === 200) {
                setPredictionData(response.data.data);
                toast.success("Predição realizada com sucesso!")
            } else {
                toast.error(response.data.message);
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className="ml-5 mt-3 w-full px-10 flex gap-1 font-sans justify-center items-center flex-col 2xl:flex-row">
            <div className="flex gap-1">
                <Select
                    className="font-sans placeholder:font-sans"
                    size="sm"
                    placeholder="Selecione o país"
                    onChange={(event) => setCountry(event.target.value)}
                >
                    {
                        countries.map((country, index) => (
                            <option key={index} value={country.country}>{country.translated_country}</option>
                        ))
                    }
                </Select>
                <Input
                    className="placeholder:font-sans font-sans"
                    size="sm"
                    placeholder="Quantos anos?"
                    type="number"
                    onChange={(event) => setYears(Number(event.target.value))}
                />
                <Select
                    className="font-sans placeholder:font-sans"
                    size="sm"
                    placeholder="Selecione o tipo de energia"
                    onChange={(event) => setEnergyType(event.target.value)}
                >
                    {
                        energyTypes.map((energyType, index) => (
                            <option key={index} value={energyType.type}>{energyType.translated_type}</option>
                        ))
                    }
                </Select>
            </div>
            <Button
                onClick={handleSubmitPrediction}
                size="sm"
                className="px-5 lg:mt-0 mt-2 2xl:w-auto w-full !bg-[#002856] !text-white hover:!bg-[#2a4c72] "
            >
                {isLoading ? "Processando..." : "Processar"}
            </Button>
        </div>
    )
}