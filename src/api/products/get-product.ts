import axios from 'axios';
import {ProductResource} from "./product-resource";
import { webshopRef } from "./../../index"

const databaseSecret = '98Ib8RC7bXCqQbPKkvhP7s4T1bvyNWa2WfOR8biW';

export const getProduct = async (productId : string): Promise<ProductResource> => {
  const response = await axios.get<ProductResource>(`${webshopRef}/products/${productId}.json?auth=${databaseSecret}`);
    return response.data;
};
