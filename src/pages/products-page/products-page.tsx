import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'products-page',
    // styleUrl: 'products-page.css'
})
export class ProductsPage {
    @Prop() match: MatchResults;

    normalize(name: string): string {
        return name ? name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase() : '';
    }


    render() {
        return (
            <div>
                <p>Hello {this.normalize(this.match.params.category)} Watches!</p>
            </div>
        );
    }
}
