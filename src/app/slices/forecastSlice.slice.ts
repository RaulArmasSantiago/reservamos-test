import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City, CityForecast } from "../../Interfaces/forecast";

interface ForecastSlice {
  currentCity: CityForecast | null;
  favorites: City[];
  recent: City[];
}

const initialState: ForecastSlice = {
  currentCity: null,
  favorites: [],
  recent: [],
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<CityForecast>) => {
      state.currentCity = action.payload;
    },
    setAddFavorites: (state, action: PayloadAction<City>) => {
      state.favorites.push(action.payload);
    },
    setRemoveFavorites: (state, action: PayloadAction<City>) => {
      const index = state.favorites.findIndex(
        (city) => city.id === action.payload.id
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { setCurrentCity, setAddFavorites, setRemoveFavorites } =
  forecastSlice.actions;
export default forecastSlice.reducer;
