import * as fetch from './fetch';
import productStore from '../store/productStore';

export type Product = {
    id: number,
    url: string,
    categoryId: number,
    sku: string,
    listPrice: number,
    salePrice: number,
    rating: number,
    name: string,
    description: string,
    images: string[],
    isInStock: boolean,
    accessory: Product,
    relatedProducts: Product[]
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
    let product = products.find(x => x.sku === sku);

    if(!product)
        return undefined;

    product.accessory = await getRandomAccessory();
    product.relatedProducts = await getRelatedProducts();

    return product;
}

export function formatCurrency(price: number) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);
}

export async function getRandomAccessory(): Promise<Product> {
    let productId = Math.floor(Math.random()  * (19 - 16 + 1) + 16);
    let products = await getAllProducts();

    return products.find(x => x.id === productId);
}

export async function getRelatedProducts(): Promise<Product[]> {
    let products = await getAllProducts();
    let relatedProducts: Product[] = [];

    for (let index = 0; relatedProducts.length <= 15; index++) {
        relatedProducts.push(products[Math.floor(Math.random() * products.length)]);
        relatedProducts = Array.from(new Set(relatedProducts));
    }

    return relatedProducts;
}