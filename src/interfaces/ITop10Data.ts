export interface ITop10RenewableData {
    name: string,
    hydro_consumption: number,
    other_renewable_consumption: number,
    solar_consumption: number,
    wind_consumption: number
}

export interface ITop10NonRenewableData {
    name: string, 
    coal_consumption: number,
    gas_consumption: number,
    nuclear_consumption: number,
    oil_consumption: number
}