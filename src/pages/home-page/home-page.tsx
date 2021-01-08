import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'home-page',
    styleUrl: 'home-page.scss'
})
export class HomePage {
    render() {
        return (
            <Host class="home-page">
                <ks-card img-src="/assets/images/man_in_jacket_wearing_watch.jpg" alt="man in jacket wearing watch" img-direction="behind" img-aspect-ratio="2.9:1" class="hero-image full-width justify-center sm:justify-start b-none mb-xxxl">
                    <ks-card-body class="h-100 display-flex flex-column justify-center align-end text-center">
                        <div class="text-lg xs:text-sm">A demo e-commerce site built <span class="mr-xs text-italic text-underline">entirely</span> with</div>
                        <div class="text-xxl xs:text-lg text-uppercase">Web Components</div>
                        <ks-button size="lg"><ks-icon icon="github" class="mr-sm"></ks-icon> View Source Code</ks-button>
                    </ks-card-body>
                </ks-card>
                <ks-card img-src="/assets/images/watch_on_carpet.jpg" alt="watch on carpet" img-direction="left" collapse="sm" img-aspect-ratio="4:3" class="promo">
                    <ks-card-body class="pl-md">
                        <h2>Made With Web Components</h2>
                        <p class="mb-lg">
                            The bulk of the site is made entirely of web components. The pages and layouts are compiled using <a href="https://stenciljs.com/" target="_blank" rel="noopener">Stencil.js</a> and <a href="https://kickstand-ui.com/" target="_blank" rel="noopener">Kickstand UI</a> is used for the Design System/Component library.
                        </p>
                        <ks-button display="hollow">View Source Code</ks-button>
                    </ks-card-body>
                </ks-card>
                <div class="my-md">&nbsp;</div>
                <category-gallery></category-gallery>
                <div class="my-md">&nbsp;</div>
                <ks-card img-src="/assets/images/man_in_suit_with_watch.jpg" alt="man wearing a suit and a watch" img-direction="right" img-aspect-ratio="4:3" collapse="sm" class="promo">
                    <ks-card-body class="pr-xxxl">
                        <h2>Routing & State</h2>
                        <p class="mb-lg">
                            <a href="https://github.com/ionic-team/stencil-router" target="_blank" rel="noopener">Stencil Router</a> was used to create the single-page application (SPA) functionality and <a href="https://stenciljs.com/docs/stencil-store" target="_blank" rel="noopener">Stencil Store</a> is used to manage the application's global state.
                        </p>
                        <ks-button display="hollow">View Source Code</ks-button>
                    </ks-card-body>
                </ks-card>
            </Host>
        );
    }
}
