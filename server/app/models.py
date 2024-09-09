import pandas as pd
from app.utils import RENEWABLE_COLUMNS, NON_RENEWABLE_COLUMNS

class EnergyDataModel:
    def __init__(self, file_path):
        self.df = pd.read_csv(file_path)

    def filter_countries(self, countries_to_remove):
        self.df = self.df.dropna(subset=['country'])
        self.df = self.df[~self.df['country'].isin(countries_to_remove)]

    def get_renewables_data(self):
        return self.df[RENEWABLE_COLUMNS]

    def get_non_renewables_data(self):
        return self.df[NON_RENEWABLE_COLUMNS]
