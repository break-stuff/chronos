import { Component, ComponentInterface, h, Host, Method, Listen } from '@stencil/core';
import { removeFromCart, updateCart } from '../../utils/cartUtils';
import state from "../../store/cartStore";
import { formatCurrency } from '../../utils/productUtils';

@Component({
    tag: 'cart-summary',
    styleUrl: 'cart-summary.scss'
})
export class CartSummary implements ComponentInterface {
    $cartSummaryDrawer: HTMLKsSideDrawerElement;

    @Listen('delete')
    removeFromCartHandler(event: CustomEvent) {
        removeFromCart(event.detail);
    }

    @Listen('update')
    updateCartHandler(event: CustomEvent) {
        updateCart(event.detail.sku, event.detail.quantity);
    }

    @Method()
    async show() {
        setTimeout(() => this.$cartSummaryDrawer.show(), 200);
    }

    @Method()
    async hide() {
        await this.$cartSummaryDrawer.hide();
    }

    render() {
        return (
            <Host class="cart-summary">
                <ks-side-drawer header-text="Cart Summary" position="right" size="lg" id="cart_summary" ref={(el) => this.$cartSummaryDrawer = el}>
                    <div class="cart-items">
                        {state.items.map(x => <cart-row item={x} quantity={x.quantity}></cart-row>)}
                    </div>
                    {!state.items.length && <div class="text-center mt-lg">
                        <div class="text-md mb-md">Your cart is empty</div>
                        <stencil-route-link url="/products/view-all">
                            <ks-button display="hollow" size="xs" onClick={() => this.hide()}>
                                Continue Shopping
                            </ks-button>
                        </stencil-route-link>
                    </div>}
                    <div class={`text-md text-right pt-lg mt-lg b-t-xxxs ${state.items.length > 0 ? '' : 'hide'}`}>
                        <span>Total: {formatCurrency(state.total)}</span>
                    </div>
                    <div class={`cart-actions display-flex mt-lg ${state.items.length > 0 ? '' : 'hide'}`}>
                        <stencil-route-link class="w-100 mr-lg" url="/cart">
                            <ks-button class="w-100" display="hollow" size="md" onClick={() => this.hide()}>
                                View Cart
                            </ks-button>
                        </stencil-route-link>
                        <stencil-route-link class="w-100" url="/checkout">
                            <ks-button class="w-100" size="md" onClick={() => this.hide()}>
                                Checkout <ks-icon icon="arrow_right"></ks-icon>
                            </ks-button>
                        </stencil-route-link>
                    </div>
                </ks-side-drawer>
            </Host>
        );
    }
}
