import axios from 'axios';
import {getEnvironmentVariable} from "../../config/environment-config";
import {ProductResource} from "./product-resource";

const apiUrl = getEnvironmentVariable('API_URL');

interface ProductResources {
    productResources: ProductResource[];
}

export const getProduct = async (productId : string): Promise<ProductResource> => {
  const response = await axios.get(`https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`);
  // const response = await axios.get(`${apiUrl}/products.json`);
    return response.data
};
