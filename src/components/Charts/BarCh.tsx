import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ITop10Data } from '../../interfaces/ITop10Data';

interface Props {
    data?: ITop10Data[];
}

const colors = ["#8884d8", "#82ca9d", "#FFA500", "#800080"];

export const BarCh = ({ data }: Props) => {
    const { t } = useTranslation();
    const [translatedData, setTranslatedData] = useState<ITop10Data[]>([]);

    useEffect(() => {
        if (data) {
            const newData = data.map((d, index) => ({
                ...d,
                name: t("home.top10.countries." + (d.name)),
            }));
            setTranslatedData(newData);
        }
    }, [data, t]);

    let color = 0;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                width={500}
                height={400}
                data={translatedData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    translatedData.length > 0 && Object.keys(translatedData[0]).map((key, index) => {
                        if (key === "name") return null;
                        return (
                            <Bar
                                key={key}
                                dataKey={key}
                                name={t("home.top10.charts." + key)}
                                stackId="a"
                                fill={colors[color++]}
                            />
                        );
                    })
                }
            </BarChart>
        </ResponsiveContainer>
    );
};
