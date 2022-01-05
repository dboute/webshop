import axios from 'axios';
import {getEnvironmentVariable} from "../../config/environment-config";
import {ProductResource} from "./product-resource";

const apiUrl = getEnvironmentVariable('API_URL');

interface ProductResources {
    productResources: ProductResource[];
}

export const getAvailableProducts = async (): Promise<ProductResources> => {
  const response = await axios.get(`https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
  // const response = await axios.get(`${apiUrl}/products.json`);
    return {
        productResources: response.data || [],
    };
};
