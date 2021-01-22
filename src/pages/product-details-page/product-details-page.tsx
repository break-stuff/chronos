import { Component, h, Host, ComponentInterface, Prop, State, Watch, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { addToCart } from '../../utils/cartUtils';
import { formatCurrency, getProductBySku, Product } from '../../utils/productUtils';


@Component({
    tag: 'product-details-page',
    styleUrl: 'product-details-page.scss'
})
export class ProductDetailsPage implements ComponentInterface {
    $cartSummary: HTMLCartSummaryElement;

    @Prop() match: MatchResults;

    @State() product: Product;
    @State() quantity: number = 1;
    @State() reload: boolean = false;

    @Watch('match')
    watchHandler() {
        this.loadData();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    @Listen('add')
    addProductHandler(event: CustomEvent) {
        addToCart(event.detail, 1);
    }

    async componentWillLoad() {
        await this.loadData();
    }

    componentWillRender() {
        this.$cartSummary = document.querySelector('cart-summary');
    }

    private async loadData() {
        this.reload = true;
        this.product = await getProductBySku(this.match.params.sku);        
        this.reload = false;
    }

    private getPrice(): number {
        return this.product.salePrice > 0
            ? this.product.salePrice
            : this.product.listPrice;
    }

    private async addToCartClickHandler() {
        addToCart(this.product, this.quantity)
        await this.$cartSummary.show();
    }

    render() {
        return (
            <Host class="product-details-page">
                <ks-row gutter="xxl" position="stretch" class="mt-xxl">
                    <ks-column class="xs:col-12">
                        {!this.reload && <ks-carousel class="product-carousel h-100" thumbnails hide-controls>
                            {this.product.images.map(x => <ks-carousel-slide alt={`image of watch (${this.product.sku})`} src={x}></ks-carousel-slide>)}
                        </ks-carousel>}
                    </ks-column>
                    <ks-column class="xs:col-12 xs:pt-lg">
                        <div class="product-details h-100">
                            <h1 class="text-lg md:text-md sm:text-sm xs:text-md">{this.product.name}</h1>
                            <div class="mb-sm">Item # {this.product.sku}</div>
                            <star-component rating={this.product.rating} class="mb-sm"></star-component>
                            <div class="product-price">
                                <strong class="price text-md">{formatCurrency(this.getPrice())}</strong>
                                {this.product.salePrice > 0 ? <strike class="ml-sm discount-price">{formatCurrency(this.product.listPrice)}</strike> : ''}
                            </div>
                            <p class="text-italic my-md">This is a demo site. You can purchase this product <ks-button display="link" href={this.product.url} target="_blank">directly from Timex</ks-button>.</p>
                            <p>{this.product.description}</p>
                            <div class="controls">
                                {this.product.isInStock && <ks-form-field class="mb-md" type="spin-box" value={this.quantity} label="Quantity" onUpdated={(e) => this.quantity = Number(e.detail.value)}></ks-form-field>}
                                <ks-button button-class="px-xxxl" size="lg" disabled={!this.product.isInStock} onClick={() => this.addToCartClickHandler()}>
                                    {this.product.isInStock ? 'Add to Cart' : 'Out of Stock'}
                                </ks-button>
                            </div>
                        </div>
                    </ks-column>
                </ks-row>
                <div class="purchased-together mt-xxl">
                    <h2 class="text-lg xs:text-md">Frequently Purchased Together</h2>
                    <div class="products display-flex align-center bg-white p-lg b-xxxs">
                        <ks-img src={this.product.images[0]} alt={`image of ${this.product.name}`} lazy></ks-img>
                        <ks-icon icon="plus" label="plus" class="text-xl"></ks-icon>
                        <ks-button display="link" href={`/product/${this.product.accessory.sku}`} link-tag="stencil-route-link" href-prop="url">
                            <ks-img src={this.product.accessory.images[0]} alt={`image of ${this.product.accessory.name}`} lazy></ks-img>
                        </ks-button>
                    </div>
                </div>
                <div class="related-products mt-xxl">
                    <ks-gallery heading="Related Products" item-width="237px">
                        {this.product.relatedProducts.map(x => <product-summary product={x}></product-summary>)}
                    </ks-gallery>
                </div>
            </Host>
        );
    }
}
