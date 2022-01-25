import axios from 'axios';
import {ProductResource} from "./product-resource";
import { webshopRef } from "./../../index"

const databaseSecret = '98Ib8RC7bXCqQbPKkvhP7s4T1bvyNWa2WfOR8biW';

export const getAvailableProducts = async (): Promise<ProductResource[]> => {
  const response = await axios.get<ProductResource[]>(`${webshopRef}/products.json?auth=${databaseSecret}`);
    return response.data || [];
};
