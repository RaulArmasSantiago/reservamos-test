import { apiReservamos } from "../utils/api";

export const getCities = async (request: string) => {
  try {
    return await apiReservamos.get(`/places?q=${request}`);
  } catch (err) {
    console.error("Error al obtener las ciudades", err);
    throw err;
  }
};
