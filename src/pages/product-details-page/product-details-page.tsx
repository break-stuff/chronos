import { Component, h, Host } from '@stencil/core';


@Component({
    tag: 'product-details-page',
    styleUrl: 'product-details-page.scss'
})
export class ProductDetailsPage {

    

    render() {
        return (
            <Host class="product-details-page">
                <p>Hello ProductDetailsPage!</p>
            </Host>
        );
    }
}
