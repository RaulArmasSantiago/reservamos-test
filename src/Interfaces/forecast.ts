export interface City {
  ascii_display: string;
  city_ascii_name: string;
  city_name: string;
  city_slug: string;
  country: string;
  display: string;
  id: number;
  lat: string;
  long: string;
  popularity: string;
  result_type: string;
  slug: string;
  sort_criteria: number;
  state: string;
}

export interface CityForecast {
  city: string;
  state: string;
  lat: string;
  long: string;
  week: WeekForecast[];
  hour: ForecastByHours[];
}

export interface ForecastByHours {
  time: string;
  temp_min: number;
  temp_max: number;
  icon: string;
}

export interface WeekForecast {
  date: string;
  day: string;
  temp_min: number;
  temp_max: number;
  icon: string;
}
