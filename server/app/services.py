from app.models import EnergyDataModel
from sklearn.linear_model import LinearRegression
import numpy as np
from app.utils import COUNTRIES_TO_REMOVE
import pandas as pd

class EnergyDataService:
    def __init__(self):
        self.energy_model = EnergyDataModel('data/Consumo_Energia_Mundial.csv')
        self.energy_model.filter_countries(COUNTRIES_TO_REMOVE) 

    def get_energy_consumption(self, country):
        code = 200

        df_renewables = self.energy_model.get_renewables_data()
        df_non_renewables = self.energy_model.get_non_renewables_data()
        
        renewables = df_renewables[df_renewables['country'] == country]
        if df_renewables['country'].eq(country).any():
            renewables = df_renewables[df_renewables['country'] == country]
        else:
            renewables = pd.DataFrame()
        
        if df_non_renewables['country'].eq(country).any():
            non_renewables = df_non_renewables[df_non_renewables['country'] == country]
            code = 500
        else:
            non_renewables = pd.DataFrame()
            code = 500

        return code, renewables, non_renewables

    def predict_future_consumption(self, df, country, energy_type, years):
        
        country_data = df[(df['country'] == country) & df[energy_type].notna() & df['year'].notna()]
        if country_data.empty:
            return 500, None
        
        X = pd.DataFrame(country_data['year'], columns=['year'])
        y = country_data[energy_type]
        
        model = LinearRegression()
        model.fit(X, y)
        
        future_years = pd.DataFrame(range(X['year'].max() + 1, X['year'].max() + years + 1), columns=['year'])
        
        predictions = model.predict(future_years)
    
        data = []
        for year, prediction in zip(future_years['year'], predictions):
            data.append({'name': year, 'predição': round(prediction, 2)})

        return 200, data

    def get_top10_renewable(self, df):
        df_renewables_grouped = df.groupby('country').sum()
        df_renewables_grouped = df_renewables_grouped.sort_values(by='renewables_consumption', ascending=False).head(10)
        
        result = df_renewables_grouped[['solar_consumption', 'wind_consumption', 'hydro_consumption', 'other_renewable_consumption']].reset_index().to_dict(orient='records')
        
        for item in result:
            for key in item.keys():
                if key != 'country':
                    item[key] = round(item[key], 2)
    
        for item in result:
            item['name'] = item.pop('country')

        return 200, result