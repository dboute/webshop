import axios from 'axios';
import { webshopRef } from "./../../index"
import {ColorResource} from "./color-resource";

const databaseSecret = '98Ib8RC7bXCqQbPKkvhP7s4T1bvyNWa2WfOR8biW';

export const getAvailableColors = async (): Promise<ColorResource[]> => {
  const response = await axios.get<ColorResource[]>(`${webshopRef}/colors.json?auth=${databaseSecret}`);
    return response.data || [];
};
