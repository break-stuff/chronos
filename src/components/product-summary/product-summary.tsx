import { Component, h, Host, Prop, State, Event, EventEmitter } from '@stencil/core';
import { formatCurrency, Product } from '../../utils/productUtils';

@Component({
    tag: 'product-summary',
    styleUrl: 'product-summary.scss'
})
export class ProductSummary {
    $cartSummary: HTMLCartSummaryElement;
    
    @Prop() product: Product;

    @State() isInCart: boolean = false;

    @Event() add: EventEmitter;

    componentWillRender() {
        this.$cartSummary = document.querySelector('cart-summary');
    }

    private getPrice(): number {
        return this.product.salePrice > 0
            ? this.product.salePrice
            : this.product.listPrice;
    }

    private async addToCartClickHandler(product: Product) {
        this.add.emit(product);
        await this.$cartSummary.show();
    }

    render() {
        return (
            <Host class="product-summary">
                <ks-card
                    img-src={this.product.images[0]}
                    alt={`image of watch (${this.product.sku})`}
                    img-aspect-ratio="2:3"
                    href={`/product/${this.product.sku}`}
                    link-tag="stencil-route-link"
                    href-prop="url"
                    lazy
                >
                    <ks-card-body>
                        <div class="product-name">
                            <a href={`/product/${this.product.sku}`}>{this.product.name}</a>
                        </div>
                        <star-component rating={this.product.rating} class="mt-auto"></star-component>
                        <div class="prices">
                            <strong class="price">{formatCurrency(this.getPrice())}</strong>
                            {this.product.salePrice > 0 ? <strike class="ml-sm discount-price">{formatCurrency(this.product.listPrice)}</strike> : ''}
                        </div>
                    </ks-card-body>
                    <ks-card-footer>
                        <ks-button class="w-100 text-center" disabled={!this.product.isInStock} onClick={() => this.addToCartClickHandler(this.product)}>
                            {this.product.isInStock ? 'Add to Cart' : 'Out of Stock'}
                        </ks-button>
                    </ks-card-footer>
                </ks-card>
            </Host>
        );
    }
}
