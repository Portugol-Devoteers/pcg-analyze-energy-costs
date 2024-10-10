import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ITop10NonRenewableData, ITop10RenewableData } from '../../interfaces/ITop10Data';

type ITop10Data = ITop10RenewableData | ITop10NonRenewableData;

const mockData: ITop10Data[] = [
    {
        name: "País 1",
        Éolica: 400,
        Hidrelétrica: 240,
        Outras: 240,
        Solar: 240
    },
    {
        name: "País 2",
        Éolica: 300,
        Hidrelétrica: 139,
        Outras: 221,
        Solar: 221
    },
];

interface Props {
    data?: ITop10Data[]
}

const colors = ["#8884d8", "#82ca9d", "#FFA500", "#800080"]

export const BarCh = ({ data }: Props) => {

    if (!data) data = mockData

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                width={500}
                height={400}
                data={data}
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
                    data.length > 0 && Object.keys(data[0]).map((key, index) => {
                        if (key === "name") return null;
                        return <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />
                    })
                }

            </BarChart>
        </ResponsiveContainer>
    );
}
