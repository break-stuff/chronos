import { Component, h, Host } from '@stencil/core';
import { applyPolyfills, defineCustomElements } from "kickstand-ui/loader";

// Apply the polyfills and bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});

@Component({
  tag: 'app-root'
})
export class AppRoot {
  render() {
    return (
      <Host class="app">
        <page-header></page-header>

        <main>
          <div class="content-wrapper">
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="home-page" exact={true} />
                <stencil-route url="/products/:category" component="products-page" />
                <stencil-route url="/stories" component="stories-page" />
                <stencil-route url="/about" component="about-page" />
                <stencil-route url="/contact" component="contact-page" />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router>
          </div>
        </main>

        <page-footer></page-footer>
      </Host>
    );
  }
}
