import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { Product } from '../../utils/productUtils';
import { addToCart, CartItem, getCart, removeFromCart, updateCart } from "../../utils/cartUtils";

@Component({
    tag: 'product-summary',
    styleUrl: 'product-summary.scss'
})
export class ProductSummary {
    @Prop() product: Product;

    @State() cartItems: CartItem[] = [];
    @State() isInCart: boolean = false;

    componentWillLoad() {
        this.cartItems = getCart();
        this.isInCart = this.cartItems.some(x => x.sku === this.product.sku);
    }

    private getPrice(): number {
        return this.product.salePrice > 0
            ? this.product.salePrice
            : this.product.listPrice;
    }

    private addToCartClickHandler(product: Product) {
        addToCart(product, 1);
        console.log(this.cartItems);
        
        this.isInCart = true;
    }

    private cartQuantityUpdateHandler(sku: string, quantity: any) {        
        if(quantity <= 0) {
            removeFromCart(sku);
            this.isInCart = false;
        }

        updateCart(sku, Number(quantity));
    }

    render() {
        let cartProduct = this.cartItems.find(x => x.sku === this.product.sku);

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
                        <div class="product-name">
                            <a href={`/product/${this.product.sku}`}>{this.product.name}</a>
                        </div>
                        <star-component rating={this.product.rating} class="mt-auto"></star-component>
                        <div class="prices">
                            <strong class="price">${this.getPrice().toFixed(2)}</strong>
                            {this.product.salePrice > 0 ? <strike class="ml-sm discount-price">${this.product.listPrice.toFixed(2)}</strike> : ''}
                        </div>
                    </ks-card-body>
                    <ks-card-footer>
                        {!this.isInCart || !this.product.isInStock
                            ? <ks-button class="w-100 text-center" disabled={!this.product.isInStock} onClick={() => this.addToCartClickHandler(this.product)}>
                                {this.product.isInStock ? 'Add to Cart' : 'Out of Stock'}
                            </ks-button>
                            : <div class="quantity-control">
                                <ks-form-field type="spin-box" label="Qty in Cart" size="sm" value={cartProduct.quantity} onUpdated={(e) => this.cartQuantityUpdateHandler(this.product.sku, e.detail.value)}></ks-form-field>
                            </div>}
                    </ks-card-footer>
                </ks-card>
            </Host>
        );
    }
}
