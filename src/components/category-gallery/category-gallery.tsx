import { Component, h, State, Host } from '@stencil/core';
import { Category, getAllCategories } from '../../utils/categoryUtils';

@Component({
    tag: 'category-gallery',
    styleUrl: 'category-gallery.scss'
})
export class CategoryGallery {
    @State() categories: Category[] = [];

    async componentWillLoad() {
        let response = await getAllCategories();
        this.categories = response.sort((a, b) => a.sortOrder - b.sortOrder);
    }

    render() {
        return (
            <Host class="category-gallery">
                {this.categories.length
                    ? <ks-gallery heading="Product Line" class="categories" item-width="350px">
                        {this.categories.map(x => <ks-card img-src={x.imageUrl} alt={x.name} href={`products/${x.urlSegment}`} class="shadow-none bg-white" img-aspect-ratio="2:1" clickable>
                            <h3 class="mt-auto text-center">{x.name}</h3>
                        </ks-card>)}
                        <div class="display-flex align-center justify-center p-xxxl">
                            <stencil-route-link url="/products/view-all">
                                <ks-button size="xl" display="hollow">View All <ks-icon icon="arrow_right"></ks-icon></ks-button>
                            </stencil-route-link>

                        </div>
                    </ks-gallery>
                    : ''}
            </Host>
        );
    }
}
