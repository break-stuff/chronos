import { products } from './data/products';
import { pageArray, sortArray } from "../arrayUtils";
import { Product } from '../productUtils';

describe('pageArray', () => {
    it('should return the first 10 items', async () => {
        const pagedProducts = pageArray(products, 10, 1);
        expect(pagedProducts.length).toBe(10);
    });

    it('should return products 6-10', async () => {
        const pagedProducts: Product[] = pageArray(products, 5, 2);
        expect(pagedProducts[0].id).toBe(6);
    });
});

describe('sortArray', () => {
    it('should sort products by price', async () => {
        const pagedProducts: Product[] = sortArray(products, 'name');
        expect(pagedProducts[0].sku).toBe('TW2R82900US');
    });

    it('should sort products by price desc', async () => {
        const pagedProducts: Product[] = sortArray(products, 'name', true);
        expect(pagedProducts[0].sku).toBe('TW2U37800VQ');
    });
});