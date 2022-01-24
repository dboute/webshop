import axios from 'axios';
import {ProductResource} from "./product-resource";
import { webshopRef } from "./../../index"

const databaseSecret = '98Ib8RC7bXCqQbPKkvhP7s4T1bvyNWa2WfOR8biW';

interface ProductResources {
    productResources: ProductResource[];
}

export const getAvailableProducts = async (): Promise<ProductResources> => {
  const response = await axios.get(`${webshopRef}/products.json?auth=${databaseSecret}`);
    return {
        productResources: response.data || [],
    };
};

export const getProductsWithName = async (name: string): Promise<ProductResources> => {
    const response = await axios.get<ProductResources>(`${webshopRef}/products.json?auth=${databaseSecret}`);
    return {
        productResources: response.data.productResources.filter(product => product.name === name) || [],
    };
};
