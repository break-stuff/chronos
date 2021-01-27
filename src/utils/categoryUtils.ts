import * as fetch from './fetch';
import categoryStore from '../store/categoryStore';
import { sortArray } from './arrayUtils';

export type Category = {
    id: number,
    name: string,
    imageUrl: string,
    urlSegment: string,
    description: string,
    sortOrder: number
};

export async function getAllCategories(): Promise<Category[]> {
    let categories = categoryStore.categories;

    if(!categories.length) {
        categories = await fetch.get<Category[]>('/assets/data/categories.json');
        categoryStore.categories = categories;
    }

    return sortArray(categories, 'name');
}