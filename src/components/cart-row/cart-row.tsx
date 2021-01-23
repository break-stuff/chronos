import { Component, h, Host, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { CartItem } from '../../utils/cartUtils';
import { formatCurrency } from '../../utils/productUtils';

@Component({
    tag: 'cart-row',
    styleUrl: 'cart-row.scss'
})
export class CartRow {
    $cartSummary: HTMLCartSummaryElement;

    @Element() $el: HTMLElement;

    @Prop() item: CartItem;
    @Prop() quantity: number = 1;
    @Prop() display: boolean = false;

    @Event() delete: EventEmitter;
    @Event() update: EventEmitter;

    componentWillRender() {
        this.$cartSummary = document.querySelector('cart-summary');
    }

    private updateCart(sku: string, quantity: any) {
        if (quantity <= 0)
            this.removeFromCart(sku);

        this.update.emit({ sku, quantity });
    }

    private removeFromCart(sku: string) {
        this.delete.emit(sku);
    }

    render() {
        return (
            <Host class="cart-row">
                <ks-card class="mb-md shadow-none b-none" img-src={this.item.imageUrl} img-width="83" img-height="100" alt={`image of watch (${this.item.sku})`} img-direction="left" lazy>
                    <div class="display-flex">
                        <div class="product-details mr-md">
                            <div class="product-name">
                                <stencil-route-link url={`/product/${this.item.sku}`} onClick={() => this.$cartSummary.hide()}>{this.item.name}</stencil-route-link>
                            </div>
                            <div class="prices mt-md">
                                {this.display 
                                ? <span class="price">{this.item.quantity} x {formatCurrency(this.item.price)} = <span class="total text-md">{formatCurrency(this.item.price * this.item.quantity)}</span></span>
                                : <strong class="price">{formatCurrency(this.item.price)}</strong>}
                            </div>
                        </div>
                        {!this.display && <div class="cart-controls text-center ml-auto">
                                <ks-form-field type="spin-box" value={this.quantity} label="Quantity" size="sm" hide-label onUpdated={(e) => this.updateCart(this.item.sku, e.detail.value)}></ks-form-field>
                                <ks-button display="clear" size="sm" onClick={() => this.removeFromCart(this.item.sku)}>Remove</ks-button>
                            </div>}
                    </div>
                </ks-card>
            </Host>
        );
    }
}
