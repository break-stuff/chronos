import * as fetch from './fetch';

export type Category = {
    id: number,
    name: string,
    urlSegment: string,
    description: string
};

export async function getCategories(): Promise<Category[]> {
    return await fetch.get<Category[]>('/assets/data/categories.json');
}