import { Component, h, Prop, State, Watch, Host } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getAllProducts, Product } from '../../utils/productUtils';
import { Category, getAllCategories } from '../../utils/categoryUtils';
import { sortArray, pageArray } from "../../utils/arrayUtils";

@Component({
    tag: 'products-page',
    styleUrl: 'products-page.scss'
})
export class ProductsPage {
    @Prop() match: MatchResults;

    @State() products: Product[] = [];
    @State() filteredProducts: Product[] = [];
    @State() categories: Category[] = [];
    @State() selectedCategory: Category;
    @State() selectedSort: string;
    @State() pageNumber: number = 1;
    @State() pageCount: number = 0;
    @State() pageSize: number = 12;
    @State() pageNumbers: number[] = [];

    @Watch('match')
    watchHandler() {
        this.filterProductsByUrlSegment();
    }

    async componentWillLoad() {
        this.products = await getAllProducts();
        this.categories = await getAllCategories();
        this.categories = sortArray(this.categories, 'name');
    }

    componentDidLoad() {
        this.getProductList();
    }

    private categoryChangedHandler(categoryId: any) {
        this.selectedCategory = this.categories.find(x => x.id === Number(categoryId));
        this.pageNumber = 1;
        this.getProductList();
    }

    private sortProductList(products: Product[], sortBy: string) {
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
                return sortArray(this.filteredProducts, 'rating', true);
            default:
                return sortArray(products, 'id');
        }
    }

    private sortChangedHandler(value: any | string) {
        this.selectedSort = value;
        this.pageNumber = 1;
        this.getProductList();
    }

    private filterProductsByUrlSegment() {
        this.selectedCategory = this.categories.find(x => x.urlSegment === this.match.params.category);
        this.getProductList();
    }

    private filterProductsBySelectedCategory() {
        return this.selectedCategory
            ? this.products.filter(x => x.categoryId === this.selectedCategory.id)
            : this.products;
    }

    private getProductList() {
        let filteredProducts = this.filterProductsBySelectedCategory();
        let sortedProducts = this.sortProductList(filteredProducts, this.selectedSort);

        this.filteredProducts = pageArray(sortedProducts, this.pageSize, this.pageNumber);
        this.pageCount = Math.ceil(filteredProducts.length / this.pageSize);
        this.setPageIndicators();
    }

    private setPageIndicators() {
        this.pageNumbers = [];

        for (let i = 1; i <= this.pageCount; i++) {
            this.pageNumbers.push(i);
        }
    }

    private setPageNumber(page: number) {
        this.pageNumber = page;
        this.getProductList();
    }

    render() {
        return (
            <Host class="products-page">
                <div class="page-heading display-flex space-between align-end my-lg">
                    <h1 class="mb-none">{this.selectedCategory ? this.selectedCategory.name : 'All Products'}</h1>
                    <div class="page-controls display-flex w-40">
                        <ks-form-field type="select" label="Categories" size="sm" class="ml-lg w-100" onUpdated={(e) => this.categoryChangedHandler(e.detail.value)}>
                            <option value="" selected={!this.selectedCategory}>View All</option>
                            {this.categories.map(x => <option value={x.id} selected={x.id === this.selectedCategory?.id}>{x.name}</option>)}
                        </ks-form-field>
                        <ks-form-field type="select" label="Sort" size="sm" class="ml-lg w-100" onUpdated={(e) => this.sortChangedHandler(e.detail.value)}>
                            <option value="">Default</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="price">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </ks-form-field>
                    </div>
                </div>
                <div class="display-flex flex-wrap -m-md">
                    {this.filteredProducts.map(x => <product-summary product={x} class="w-25 p-md"></product-summary>)}
                </div>
                {this.pageNumbers.length > 1
                    ? <div class="paging-controls display-flex justify-center mt-xxxl">
                        <ks-button-bar class="mx-auto">
                            <ks-button display="hollow" disabled={this.pageNumber <= 1} onClick={() => this.setPageNumber(--this.pageNumber)}>
                                <ks-icon icon="chevron_left" label="previous page"></ks-icon>
                            </ks-button>
                            {this.pageNumbers.map(x => <ks-button display="hollow" onClick={() => this.setPageNumber(x)} button-class={x === this.pageNumber ? 'text-bold text-underline' : 'text-normal'}>
                                <span class="sr-only">page</span> {x}
                            </ks-button>)}
                            <ks-button display="hollow" disabled={this.pageNumber >= this.pageCount} onClick={() => this.setPageNumber(++this.pageNumber)}>
                                <ks-icon icon="chevron_right" label="next page"></ks-icon>
                            </ks-button>
                        </ks-button-bar>
                    </div>
                    : ''}
            </Host >
        );
    }
}
