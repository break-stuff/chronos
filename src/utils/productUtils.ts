import * as fetch from './fetch';
import productStore from '../store/productStore';

export type Product = {
    id: number,
    url: string,
    categoryId: string,
    sku: string,
    listPrice: number,
    salePrice: number,
    rating: number,
    name: string,
    description: string,
    images: string[],
    isInStock: boolean
};

export async function getAllProducts(): Promise<Product[]> {
    let products = productStore.products;

    if(!products.length) {
        products = await fetch.get<Product[]>('/assets/data/products.json');
        productStore.products = products;
    }

    return products;
}

export async function getProductBySku(sku: string): Promise<Product> {
    let products = await getAllProducts();

    return products.find(x => x.sku === sku);
}