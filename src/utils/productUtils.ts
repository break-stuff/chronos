import * as fetch from './fetch';
import productStore from '../store/productStore';
import { pageArray, sortArray } from './arrayUtils';

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

export type PagedProducts = {
    products: Product[],
    pageCount: number
};

export async function getAllProducts(): Promise<Product[]> {
    let products = productStore.products;

    if (!products.length) {
        products = await fetch.get<Product[]>('/assets/data/products.json');
        productStore.products = products;
    }

    return products;
}

export async function getProductBySku(sku: string): Promise<Product> {
    let products = await getAllProducts();
    let product = products.find(x => x.sku === sku);

    if (!product)
        return undefined;

    product.accessory = await getRandomAccessory();
    product.relatedProducts = await getRelatedProducts();

    return product;
}

export function formatCurrency(price: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export async function getRandomAccessory(): Promise<Product> {
    let productId = Math.floor(Math.random() * (19 - 16 + 1) + 16);
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

export async function getPagedProducts(categoryId: number, searchTerm: string, sortBy: string, pageSize: number, pageNumber: number): Promise<PagedProducts> {
    let products = await getAllProducts();
    let filteredProducts = getProductsByCategoryId(categoryId, products);

    filteredProducts = getProductsBySearchTerm(searchTerm, filteredProducts);

    let sortedProducts = sortProductList(filteredProducts, sortBy);

    return { 
        products: pageArray(sortedProducts, pageSize, pageNumber),
        pageCount: Math.ceil(filteredProducts.length / pageSize)
    };
}

export function getProductsByCategoryId(categoryId: number, products: Product[]): Product[] {
    return categoryId
        ? products.filter(x => x.categoryId === categoryId)
        : products;
}

export function getProductsBySearchTerm(searchTerm: string, products: Product[]): Product[] {
    return searchTerm
        ? products = products.filter(x =>
            x.name.toLowerCase().includes(searchTerm)
            || x.description.toLowerCase().includes(searchTerm))
        : products;
}

export function sortProductList(products: Product[], sortBy: string) {
    switch (sortBy) {
        case 'a-z':
            return sortArray(products, 'name');
        case 'z-a':
            return sortArray(products, 'name', true);
        case 'price':
            return sortArray(products, 'listPrice');
        case 'price-desc':
            return sortArray(products, 'listPrice', true);
        case 'rating':
            return sortArray(this.displayProducts, 'rating', true);
        default:
            return sortArray(products, 'id');
    }
}