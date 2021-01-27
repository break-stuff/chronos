import { Component, h, Host, Listen, State } from '@stencil/core';
import { addToCart, removeFromCart, updateCart } from '../../utils/cartUtils';
import store from "../../store/cartStore";
import { formatCurrency, getRelatedProducts, Product } from '../../utils/productUtils';


@Component({
    tag: 'cart-page',
    styleUrl: 'cart-page.scss'
})
export class CartPage {
    @State() relatedProducts: Product[];

    async componentWillLoad() {
        this.relatedProducts = await getRelatedProducts();
    }

    @Listen('delete')
    removeFromCartHandler(event: CustomEvent) {
        removeFromCart(event.detail);
    }

    @Listen('update')
    updateCartHandler(event: CustomEvent) {
        updateCart(event.detail.sku, event.detail.quantity);
    }

    @Listen('add')
    addProductHandler(event: CustomEvent) {
        addToCart(event.detail, 1);
    }

    render() {
        return (
            <Host class="cart-page">
                <h1 class="mt-xl">My Cart</h1>
                <ks-row gutter="xxxl" position="stretch">
                    <ks-column class="col-8 sm:col-12">
                        <div class="cart-items bg-white p-xxxl b-xxxs">
                            {store.items.map(x => <cart-row item={x} quantity={x.quantity}></cart-row>)}
                        </div>
                    </ks-column>
                    <ks-column class="col-4 sm:col-12 sm:pt-lg">
                        <div class="cart-totals bg-white p-xxxl b-xxxs text-md position-sticky top-0">
                            <div class="display-flex space-between">
                                <span>Items:</span>
                                <span>{store.count}</span>
                            </div>
                            <div class="display-flex space-between pb-xl b-b-xxxs text-lg mb-xl">
                                <span>Total:</span>
                                <span>{formatCurrency(store.total)}</span>
                            </div>
                            <stencil-route-link class="w-100" url="/checkout">
                                <ks-button class="w-100" size="lg">
                                    Checkout <ks-icon icon="arrow_right"></ks-icon>
                                </ks-button>
                            </stencil-route-link>
                        </div>
                    </ks-column>
                </ks-row>
                <div class="related-products mt-xxl">
                    <ks-gallery heading="You may also be interested in..." item-width="237px">
                        {this.relatedProducts.map(x => <product-summary product={x}></product-summary>)}
                    </ks-gallery>
                </div>

            </Host>
        );
    }
}
