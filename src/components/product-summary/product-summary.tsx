import { Component, h, Host, Prop } from '@stencil/core';
import { Product } from '../../utils/productUtils';

@Component({
    tag: 'product-summary',
    styleUrl: 'product-summary.scss'
})
export class ProductSummary {
    @Prop() product: Product;

    private getPrice(): number {
        return this.product.salePrice > 0
            ? this.product.salePrice
            : this.product.listPrice;
    }

    render() {
        return (
            <Host class="product-summary">
                <ks-card
                    img-src={this.product.images[0]}
                    alt={`image of watch (${this.product.sku})`}
                    img-aspect-ratio="2:3"
                    href={`/product/${this.product.sku}`}
                    lazy
                >
                    <ks-card-body>
                        <h3 class="product-name">
                            <a href={`/product/${this.product.sku}`}>{this.product.name}</a>
                        </h3>
                        <star-component rating={this.product.rating} class="mt-auto"></star-component>
                        <div class="prices">
                            <strong class="price">${this.getPrice().toFixed(2)}</strong>
                            {this.product.salePrice > 0 ? <strike class="ml-sm discount-price">${this.product.listPrice.toFixed(2)}</strike> : ''}
                        </div>
                    </ks-card-body>
                    <ks-card-footer>
                        <ks-button class="w-100 text-center" disabled={!this.product.isInStock}>
                            {this.product.isInStock ? 'Add to Cart' : 'Out of Stock'}
                        </ks-button>
                    </ks-card-footer>
                </ks-card>
            </Host>
        );
    }
}
