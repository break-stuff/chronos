import { Component, h, State, ComponentInterface, Host, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { getAllCategories, Category } from '../../utils/categoryUtils';
import { sortArray } from "../../utils/arrayUtils";
import state from "../../store/cartStore";
import { IFormFieldData } from 'kickstand-ui/dist/types/scripts/components/form-field/form-field';

@Component({
    tag: 'page-header',
    styleUrl: 'page-header.scss'
})
export class PageHeader implements ComponentInterface {
    $mobileMenu: HTMLKsSideDrawerElement;
    $cartSummary: HTMLCartSummaryElement;

    @Element() $el: HTMLElement;

    @Prop() history: RouterHistory;

    @State() categories: Category[];
    @State() search: string = '';

    @Event() searched!: EventEmitter<string>;

    async componentWillLoad() {
        let response = await getAllCategories();
        this.categories = sortArray(response, 'name');
    }

    componentDidLoad() {
        this.search = this.history?.location.query.search || '';
    }

    componentDidRender() {
        Array.from(this.$mobileMenu.querySelectorAll('a'))
            .forEach(element => element.addEventListener('click', () => this.$mobileMenu.hide()));

        this.$cartSummary = this.$el.querySelector('cart-summary');
    }

    private searchProducts(formData: IFormFieldData[]) {
        setTimeout(() => {
            const searchTerm = encodeURIComponent(formData[0].value as string);

            if (searchTerm && !window.location.pathname.includes('products'))
                this.history.push(`/products/view-all?search=${searchTerm}`);
            else
                this.searched.emit(formData[0].value as string);
        });
    }

    render() {
        return (
            <Host class="page-header">
                <header>
                    <div class="menu">
                        <stencil-route-link class="main-link" url="/">Chronos</stencil-route-link>
                        <div class="menu-links">
                            <div class="left-menu">
                                <ks-dropdown text="Shop" display="link">
                                    <ks-dropdown-item>
                                        <stencil-route-link url="/products/view-all">View All</stencil-route-link>
                                    </ks-dropdown-item>
                                    {this.categories.map(x => (<ks-dropdown-item>
                                        <stencil-route-link url={`/products/${x.urlSegment}`}>{x.name}</stencil-route-link>
                                    </ks-dropdown-item>))}
                                </ks-dropdown>
                                <stencil-route-link url="/about">About</stencil-route-link>
                                <stencil-route-link url="/contact">Contact</stencil-route-link>
                            </div>
                            <div class="right-menu">
                                <ks-form class="search" inline onSubmitted={(e) => this.searchProducts(e.detail.formFieldData)}>
                                    <ks-form-field id="site_search" value={this.search} type="search" label="search" size="sm" hide-label></ks-form-field>
                                    <ks-button display="clear" size="sm" type="submit">
                                        <ks-icon icon="search" label="search"></ks-icon>
                                    </ks-button>
                                </ks-form>
                                <ks-button display="link" class="cart-link mx-sm position-relative" onClick={() => this.$cartSummary.show()}>
                                    <ks-icon icon="cart" class="text-md"></ks-icon>
                                    <ks-badge color="primary" class={`bg-primary position-absolute right-0 top-0 offset-x -offset-y ${state.count > 0 ? '' : 'sr-only'}`}>{state.count}</ks-badge>
                                </ks-button>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <ks-button display="clear" class="mobile-menu-button" size="xs" shows="mobile_menu">
                            <ks-icon icon="menu" label="menu"></ks-icon>
                        </ks-button>
                        <stencil-route-link class="main-link" url="/">Chronos</stencil-route-link>
                        <ks-button display="link" class="cart-link mx-sm position-relative" onClick={() => this.$cartSummary.show()}>
                            <ks-icon icon="cart" class="text-md"></ks-icon>
                            <ks-badge color="primary" class={`bg-primary position-absolute right-0 top-0 offset-x -offset-y ${state.count > 0 ? '' : 'sr-only'}`}>{state.count}</ks-badge>
                        </ks-button>
                    </div>
                    <ks-side-drawer id="mobile_menu" header-text="Chronos" position="left" class="mobile-links" ref={el => this.$mobileMenu = el}>
                        <stencil-route-link url="/">Home</stencil-route-link>
                        <ks-accordion>
                            <ks-accordion-slide heading="Shop">
                                {this.categories.map(x => (<stencil-route-link url={`/products/${x.urlSegment}`}>{x.name}</stencil-route-link>))}
                            </ks-accordion-slide>
                        </ks-accordion>
                        <stencil-route-link url="/stories">Stories</stencil-route-link>
                        <stencil-route-link url="/about">About</stencil-route-link>
                        <stencil-route-link url="/contact">Contact</stencil-route-link>
                    </ks-side-drawer>
                    <cart-summary></cart-summary>
                </header>
            </Host>
        );
    }
}

injectHistory(PageHeader);