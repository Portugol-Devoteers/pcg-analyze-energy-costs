import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IPredictionData } from "../../interfaces/IPredictionData";

interface Props {
    data?: IPredictionData[]
}
const mockData: IPredictionData[] = [
    {
        name: 2022,
        predição: 0
    }, {
        name: 2023,
        predição: 0
    }, {
        name: 2024,
        predição: 0
    }, {
        name: 2025,
        predição: 0
    },
    {
        name: 2026,
        predição: 0
    }, {
        name: 2027,
        predição: 0
    }, {
        name: 2028,
        predição: 0
    }, {
        name: 2029,
        predição: 0
    }, {
        name: 2030,
        predição: 0
    }
];


export const LineArea = ({ data }: Props) => {
    if (!data) data = mockData
    return (
        <ResponsiveContainer className="mt-2 xl:mt-56" width="100%" height={"50%"}>
            <LineChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 5,
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
                <Line type="monotone" dataKey="predição" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>

    );
}

