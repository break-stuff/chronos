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
                          {this.categories.map(x => <ks-card img-src={x.imageUrl} alt={x.name} href={`products/${x.urlSegment}`} class="shadow-none" clickable>
                              <h3 class="mt-auto text-center">{x.name}</h3>
                          </ks-card>)}
                      </ks-gallery>
                    : ''}
            </Host>
        );
    }
}
