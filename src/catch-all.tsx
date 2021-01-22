import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'catch-all'
})
export class CatchAll {
  render() {
    return (
      <Host class="text-center p-xxxl">
        <div class="p-xxxl m-xxxl">
          <h1>404</h1>
          <div class="text-md mb-lg">Page Not Found</div>
          <stencil-route-link url="/products/view-all">
            <ks-button display="hollow">Back to Shopping</ks-button>
          </stencil-route-link>
        </div>
      </Host>
    );
  }
}
