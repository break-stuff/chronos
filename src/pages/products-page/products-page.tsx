import { Component, h, Prop, State, Watch, Host, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getAllProducts, getPagedProducts, Product } from '../../utils/productUtils';
import { Category, getAllCategories } from '../../utils/categoryUtils';
import { addToCart } from "../../utils/cartUtils";
import { RouterHistory } from '@stencil/router';

@Component({
    tag: 'products-page',
    styleUrl: 'products-page.scss'
})
export class ProductsPage {
    @Prop() match: MatchResults;
    @Prop() history: RouterHistory;

    @State() products: Product[] = [];
    @State() displayProducts: Product[] = [];
    @State() categories: Category[] = [];
    @State() selectedCategory: Category;
    @State() searchTerm: string;
    @State() selectedSort: string;
    @State() pageNumber: number = 1;
    @State() pageCount: number = 0;
    @State() pageSize: number = 8;
    @State() pageNumbers: number[] = [];

    @Watch('match')
    watchHandler() {
        this.filterProductsByUrlSegment();
    }

    @Listen('add')
    addProductHandler(event: CustomEvent) {
        addToCart(event.detail, 1);
    }

    async componentWillLoad() {
        this.products = await getAllProducts();
        this.categories = await getAllCategories();
    }

    componentDidLoad() {
        this.addSearchListener();
        this.filterProductsByUrlSegment();
        this.searchClearHandler();
    }

    componentWillRender() {
        this.searchTerm = this.history?.location.query.search?.toLowerCase();
    }

    private addSearchListener() {
        const pageHeader = document.querySelector('page-header') as HTMLPageHeaderElement;
        pageHeader.addEventListener('searched', (e) => {
            this.searchTerm = e['detail'];
            this.getProductList();
        });
    }

    private searchClearHandler() {
        const $search = document.querySelector('#site_search');
        $search.addEventListener('cleared', () => {            
            this.searchTerm = '';
            this.getProductList();
        });
    }

    private categoryChangedHandler(categoryId: any) {
        this.selectedCategory = this.categories.find(x => x.id === Number(categoryId));
        this.pageNumber = 1;
        this.getProductList();
    }

    private sortChangedHandler(value: any | string) {
        this.selectedSort = value;
        this.pageNumber = 1;
        this.getProductList();
    }

    private filterProductsByUrlSegment() {
        this.selectedCategory = this.categories.find(x => x.urlSegment === this.match.params.category)
            || this.categories.find(x => x.urlSegment === 'view-all');

        this.getProductList();
    }

    private async getProductList() {
        let pagedProducts = await getPagedProducts(this.selectedCategory?.id, this.searchTerm, this.selectedSort, this.pageSize, this.pageNumber);
        this.displayProducts = pagedProducts.products;
        this.pageCount = pagedProducts.pageCount;
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <Host class="products-page">
                <div class="page-heading display-flex space-between align-end md:flex-column md:align-start my-lg">
                    <h1 class="mb-none">{this.selectedCategory ? this.selectedCategory.name : 'All Products'}</h1>
                    <div class="page-controls display-flex w-40 md:w-66 sm:w-100">
                        <ks-form-field type="select" label="Categories" size="sm" class="ml-lg md:ml-none w-100" onUpdated={(e) => this.categoryChangedHandler(e.detail.value)}>
                            <option value="" selected={!this.selectedCategory}>View All</option>
                            {this.categories.map(x => <option value={x.id} selected={x.id === this.selectedCategory?.id}>{x.name}</option>)}
                        </ks-form-field>
                        <ks-form-field type="select" label="Sort" size="sm" class="ml-xl w-100" onUpdated={(e) => this.sortChangedHandler(e.detail.value)}>
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
                    {this.displayProducts.map(x => <product-summary product={x} class="w-25 md:w-33 sm:w-50 xs:w-100 p-md"></product-summary>)}
                </div>
                {this.pageNumbers.length > 1
                    ? <div class="paging-controls display-flex justify-center mt-xxxl">
                        <ks-button-bar class="mx-auto bg-white">
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
