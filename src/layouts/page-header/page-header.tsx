import { Component, h, State, ComponentInterface, Host } from '@stencil/core';
import { getAllCategories, Category } from '../../utils/categoryUtils';

@Component({
    tag: 'page-header',
    styleUrl: 'page-header.scss'
})
export class PageHeader implements ComponentInterface {
    $mobileMenu: HTMLKsSideDrawerElement;
    @State() categories: Category[];

    async componentWillLoad() {
        let response = await getAllCategories();
        this.categories = response.sort((a: any, b: any) => {
            let aName = a.name.toLowerCase();
            let bName = b.name.toLowerCase();

            return aName < bName ? -1 : aName > bName ? 1 : 0;
        });
    }

    componentDidRender() {
        Array.from(this.$mobileMenu.querySelectorAll('a'))
            .forEach(element => element.addEventListener('click', () => this.$mobileMenu.hide()));
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
                                    {this.categories.map(x => (<ks-dropdown-item>
                                        <stencil-route-link url={`/products/${x.urlSegment}`}>{x.name}</stencil-route-link>
                                    </ks-dropdown-item>))}
                                </ks-dropdown>
                                <stencil-route-link url="/stories">Stories</stencil-route-link>
                                <stencil-route-link url="/about">About</stencil-route-link>
                                <stencil-route-link url="/contact">Contact</stencil-route-link>
                            </div>
                            <div class="right-menu">
                                <ks-form class="search" inline>
                                    <ks-form-field type="search" label="search" size="sm" hide-label></ks-form-field>
                                    <ks-button display="clear" size="sm">
                                        <ks-icon icon="search" label="search"></ks-icon>
                                    </ks-button>
                                </ks-form>
                                <ks-button display="link" class="cart-link mx-sm position-relative">
                                    <ks-icon icon="cart" class="text-md"></ks-icon>
                                    <ks-badge color="primary" class="bg-primary position-absolute right-0 top-0 offset-x -offset-y">3</ks-badge>
                                </ks-button>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <ks-button display="clear" class="mobile-menu-button" size="xs" shows="mobile_menu">
                            <ks-icon icon="menu" label="menu"></ks-icon>
                        </ks-button>
                        <stencil-route-link class="main-link" url="/">Chronos</stencil-route-link>
                        <ks-button display="link" class="cart-link mx-sm position-relative">
                            <ks-icon icon="cart" class="text-md"></ks-icon>
                            <ks-badge color="primary" class="bg-primary position-absolute right-0 top-0 offset-x -offset-y">3</ks-badge>
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
                </header>
            </Host>
        );
    }
}
