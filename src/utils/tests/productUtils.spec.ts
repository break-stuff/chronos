import { getProductBySku, getProductsByCategoryId, getProductsBySearchTerm, getRandomAccessory, getRelatedProducts, Product, sortProductList } from '../productUtils';
import productStore from "../../store/productStore";
import { products } from "./data/products";

productStore.products = products;

describe('getProductBySku', () => {
    it('should find product based on SKU', async () => {
        const product = getProductBySku('TW2R82900US');
        
        expect(product).toBeDefined();
    });
});

describe('getRandomAccessory', async () => {
    it('should return a random accessory', async () => {
        const product = await getRandomAccessory();
        
        expect(product.categoryId).toBe(4);
    });
});

describe('getProductsByCategoryId', async () => {
    it('should return only accessories', async () => {
        const products: Product[] = getProductsByCategoryId(4, productStore.products);
        
        expect(products.length).toBe(4);
    });
});

describe('getProductsBySearchTerm', async () => {
    it('should return only products with the word "passport" in the name or description', async () => {
        const products: Product[] = getProductsBySearchTerm('passport', productStore.products);
        
        expect(products.length).toBe(1);
    });
});

describe('sortProductList', async () => {
    it('should return only accessories', async () => {
        const products: Product[] = sortProductList(productStore.products, 'price');
        
        expect(products[0].sku).toBe('TW7C819000L');
    });
});

