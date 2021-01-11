import { Component, h, Host, Prop } from '@stencil/core';


@Component({
    tag: 'star-component',
    styleUrl: 'star-component.scss'
})
export class StarComponent {
    @Prop() rating: number = 0;


    render() {
        return (
            <Host class="star-component">
                <span class="inactive-stars text-warning">
                    <ks-icon icon="star"></ks-icon>
                    <ks-icon icon="star"></ks-icon>
                    <ks-icon icon="star"></ks-icon>
                    <ks-icon icon="star"></ks-icon>
                    <ks-icon icon="star"></ks-icon>
                </span>
                <span class="rating-stars text-warning" style={{ ['max-width']: `${this.rating}rem` }}>
                    <ks-icon icon="star_fill"></ks-icon>
                    <ks-icon icon="star_fill"></ks-icon>
                    <ks-icon icon="star_fill"></ks-icon>
                    <ks-icon icon="star_fill"></ks-icon>
                    <ks-icon icon="star_fill"></ks-icon>
                </span>
                <strong class="score"><span class="sr-only">Rating:</span> {this.rating}</strong>
            </Host>
        );
    }
}
