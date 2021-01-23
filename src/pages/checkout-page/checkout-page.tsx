import { Component, h, Host, State } from '@stencil/core';
import { IFormData } from 'kickstand-ui/dist/types/scripts/components/form/form';
import state from "../../store/cartStore";
import { formatCurrency } from '../../utils/productUtils';


@Component({
    tag: 'checkout-page',
    styleUrl: 'checkout-page.scss'
})
export class CheckoutPage {
    $pageHeader: HTMLElement;
    $pageFooter: HTMLElement;

    @State() isSubmitted: boolean = false;
    @State() name: string;

    componentWillLoad() {
        this.$pageHeader = document.querySelector('.page-header');
        this.$pageFooter = document.querySelector('.page-footer');

        this.$pageHeader.hidden = true;
        this.$pageFooter.hidden = true;
    }

    disconnectedCallback() {
        this.$pageHeader.hidden = false;
        this.$pageFooter.hidden = false;
        this.isSubmitted = false;
    }

    private checkout(formData: IFormData) {
        setTimeout(() => {
            this.isSubmitted = formData.isValid;
            let name = formData.formFieldData.find(x => x.name === 'name');
            this.name = name.value as string;
        });
    }

    render() {
        return (
            <Host class="checkout-page">
                <div class="text-xl text-accent text-primary text-normal">
                    <stencil-route-link url="/" class="text-normal">Chronos</stencil-route-link>
                </div>

                {!this.isSubmitted
                    ? <ks-row>
                        <ks-column class="sm:col-12">
                            <div class="bg-white p-xxxl sm:p-md b-xxxs">
                                <h1>Checkout</h1>
                                <ks-form onSubmitted={(e) => this.checkout(e.detail)}>
                                    <ks-form-field label="Name" required></ks-form-field>
                                    <ks-form-field label="Company (optional)"></ks-form-field>
                                    <ks-form-field label="Address" required></ks-form-field>
                                    <ks-form-field label="Address 2 (optional)"></ks-form-field>
                                    <div class="display-flex space-between align-end md:flex-column md:align-start">
                                        <ks-form-field label="City" class="w-40 md:w-100" required></ks-form-field>
                                        <ks-form-field label="State" class="w-30 md:w-100 mx-sm md:mx-none" type="select" required>
                                            <option disabled selected></option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </ks-form-field>
                                        <ks-form-field label="Zip Code" class="w-25 md:w-100" required></ks-form-field>
                                    </div>
                                    <ks-form-field label="Keep me up to date on exclusive offers" type="checkbox"></ks-form-field>
                                    <div class="text-right">
                                        <ks-button type="submit" size="lg">Checkout</ks-button>
                                    </div>
                                </ks-form>
                                <div class="text-xs text-italic">This is a demo site and this form does not actually do anything. If you are interested in purchasing these products, please visit <ks-button href="timex.com" display="link" target="_blank">Timex's website</ks-button>.</div>
                            </div>
                        </ks-column>
                        <ks-column class="sm:col-12">
                            <div class="py-lg sm:p-none"></div>
                            <div class="p-xxxl mt-xxxl sm:mt-none sm:px-none">
                                {state.items.map(x => <div class="purchase-item display-flex mb-xxl">
                                    <div class="image">
                                        <div class="position-relative p-md b-xxxs bg-white">
                                            <ks-img src={x.imageUrl} alt={`wrist watch (${x.name})`} lazy></ks-img>
                                            <ks-badge color="light" class="position-absolute top-0 right-0 offset-x -offset-y text-sm bg-light-lighter">{x.quantity}</ks-badge>
                                        </div>
                                    </div>
                                    <div class="display-flex flex-column w-70 pl-xxl">
                                        <div class="text-bold text-sm">{x.name}</div>
                                    </div>
                                    <div class="w-30 text-md text-right">{formatCurrency(x.price * x.quantity)}</div>
                                </div>)}
                                <div class="display-flex space-between text-lg pt-lg b-t-xxxs">
                                    <span>Total:</span>
                                    <span>{formatCurrency(state.total)}</span>
                                </div>
                            </div>
                        </ks-column>
                    </ks-row>
                    : <div class="text-center">
                        <h1><stencil-route-link url="/">Chronos</stencil-route-link></h1>
                        <div class="text-lg">Thank you for your order, {this.name}!</div>
                        <div class="text-md text-italic">This is a demo site and this form does not actually do anything. If you are interested in purchasing these products, please visit <ks-button href="timex.com" display="link" target="_blank">Timex's website</ks-button>.</div>
                    </div>}
            </Host>
        );
    }
}
