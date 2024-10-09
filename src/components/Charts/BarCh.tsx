import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ITop10Data } from '../../interfaces/ITop10Data';

const mockData: ITop10Data[] = [
    {
        "name": "Brazil",
        "hydro_consumption": 20,
        "other_renewable_consumption": 0,
        "solar_consumption": 0,
        "wind_consumption": 0
    }
];

interface Props {
    data?: ITop10Data[]
}

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
                <Bar dataKey="hydro_consumption" stackId="a" fill="#8884d8" />
                <Bar dataKey="other_renewable_consumption" stackId="a" fill="#82ca9d" />
                <Bar dataKey="solar_consumption" stackId="a" fill="#FFA500" />
                <Bar dataKey="wind_consumption" stackId="a" fill="#800080" />
            </BarChart>
        </ResponsiveContainer>
    );
}
