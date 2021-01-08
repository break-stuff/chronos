import { Component, h, Host, Prop } from '@stencil/core';


@Component({
    tag: 'product-summary',
    styleUrl: 'product-summary.scss'
})
export class ProductSummary {
    @Prop() product
    

    render() {
        return (
            <Host class="product-summary">
                <ks-card>
                    <ks-card-body>

                    </ks-card-body>
                    <ks-card-footer>
                        <ks-button class="w-100">Add to Cart</ks-button>
                    </ks-card-footer>
                </ks-card>
                <p>Hello ProductSummary!</p>
            </Host>
        );
    }
}
