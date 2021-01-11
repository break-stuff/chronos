/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Product } from "./utils/productUtils";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AboutPage {
    }
    interface AppRoot {
    }
    interface CartPage {
    }
    interface CategoryGallery {
    }
    interface CheckoutPage {
    }
    interface ContactPage {
    }
    interface HomePage {
    }
    interface PageFooter {
    }
    interface PageHeader {
    }
    interface ProductDetailsPage {
    }
    interface ProductSummary {
        "product": Product;
    }
    interface ProductsPage {
        "match": MatchResults;
    }
    interface StarComponent {
        "rating": number;
    }
    interface StoriesPage {
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCartPageElement extends Components.CartPage, HTMLStencilElement {
    }
    var HTMLCartPageElement: {
        prototype: HTMLCartPageElement;
        new (): HTMLCartPageElement;
    };
    interface HTMLCategoryGalleryElement extends Components.CategoryGallery, HTMLStencilElement {
    }
    var HTMLCategoryGalleryElement: {
        prototype: HTMLCategoryGalleryElement;
        new (): HTMLCategoryGalleryElement;
    };
    interface HTMLCheckoutPageElement extends Components.CheckoutPage, HTMLStencilElement {
    }
    var HTMLCheckoutPageElement: {
        prototype: HTMLCheckoutPageElement;
        new (): HTMLCheckoutPageElement;
    };
    interface HTMLContactPageElement extends Components.ContactPage, HTMLStencilElement {
    }
    var HTMLContactPageElement: {
        prototype: HTMLContactPageElement;
        new (): HTMLContactPageElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLPageFooterElement extends Components.PageFooter, HTMLStencilElement {
    }
    var HTMLPageFooterElement: {
        prototype: HTMLPageFooterElement;
        new (): HTMLPageFooterElement;
    };
    interface HTMLPageHeaderElement extends Components.PageHeader, HTMLStencilElement {
    }
    var HTMLPageHeaderElement: {
        prototype: HTMLPageHeaderElement;
        new (): HTMLPageHeaderElement;
    };
    interface HTMLProductDetailsPageElement extends Components.ProductDetailsPage, HTMLStencilElement {
    }
    var HTMLProductDetailsPageElement: {
        prototype: HTMLProductDetailsPageElement;
        new (): HTMLProductDetailsPageElement;
    };
    interface HTMLProductSummaryElement extends Components.ProductSummary, HTMLStencilElement {
    }
    var HTMLProductSummaryElement: {
        prototype: HTMLProductSummaryElement;
        new (): HTMLProductSummaryElement;
    };
    interface HTMLProductsPageElement extends Components.ProductsPage, HTMLStencilElement {
    }
    var HTMLProductsPageElement: {
        prototype: HTMLProductsPageElement;
        new (): HTMLProductsPageElement;
    };
    interface HTMLStarComponentElement extends Components.StarComponent, HTMLStencilElement {
    }
    var HTMLStarComponentElement: {
        prototype: HTMLStarComponentElement;
        new (): HTMLStarComponentElement;
    };
    interface HTMLStoriesPageElement extends Components.StoriesPage, HTMLStencilElement {
    }
    var HTMLStoriesPageElement: {
        prototype: HTMLStoriesPageElement;
        new (): HTMLStoriesPageElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "app-root": HTMLAppRootElement;
        "cart-page": HTMLCartPageElement;
        "category-gallery": HTMLCategoryGalleryElement;
        "checkout-page": HTMLCheckoutPageElement;
        "contact-page": HTMLContactPageElement;
        "home-page": HTMLHomePageElement;
        "page-footer": HTMLPageFooterElement;
        "page-header": HTMLPageHeaderElement;
        "product-details-page": HTMLProductDetailsPageElement;
        "product-summary": HTMLProductSummaryElement;
        "products-page": HTMLProductsPageElement;
        "star-component": HTMLStarComponentElement;
        "stories-page": HTMLStoriesPageElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface AppRoot {
    }
    interface CartPage {
    }
    interface CategoryGallery {
    }
    interface CheckoutPage {
    }
    interface ContactPage {
    }
    interface HomePage {
    }
    interface PageFooter {
    }
    interface PageHeader {
    }
    interface ProductDetailsPage {
    }
    interface ProductSummary {
        "product"?: Product;
    }
    interface ProductsPage {
        "match"?: MatchResults;
    }
    interface StarComponent {
        "rating"?: number;
    }
    interface StoriesPage {
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "app-root": AppRoot;
        "cart-page": CartPage;
        "category-gallery": CategoryGallery;
        "checkout-page": CheckoutPage;
        "contact-page": ContactPage;
        "home-page": HomePage;
        "page-footer": PageFooter;
        "page-header": PageHeader;
        "product-details-page": ProductDetailsPage;
        "product-summary": ProductSummary;
        "products-page": ProductsPage;
        "star-component": StarComponent;
        "stories-page": StoriesPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "cart-page": LocalJSX.CartPage & JSXBase.HTMLAttributes<HTMLCartPageElement>;
            "category-gallery": LocalJSX.CategoryGallery & JSXBase.HTMLAttributes<HTMLCategoryGalleryElement>;
            "checkout-page": LocalJSX.CheckoutPage & JSXBase.HTMLAttributes<HTMLCheckoutPageElement>;
            "contact-page": LocalJSX.ContactPage & JSXBase.HTMLAttributes<HTMLContactPageElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "page-footer": LocalJSX.PageFooter & JSXBase.HTMLAttributes<HTMLPageFooterElement>;
            "page-header": LocalJSX.PageHeader & JSXBase.HTMLAttributes<HTMLPageHeaderElement>;
            "product-details-page": LocalJSX.ProductDetailsPage & JSXBase.HTMLAttributes<HTMLProductDetailsPageElement>;
            "product-summary": LocalJSX.ProductSummary & JSXBase.HTMLAttributes<HTMLProductSummaryElement>;
            "products-page": LocalJSX.ProductsPage & JSXBase.HTMLAttributes<HTMLProductsPageElement>;
            "star-component": LocalJSX.StarComponent & JSXBase.HTMLAttributes<HTMLStarComponentElement>;
            "stories-page": LocalJSX.StoriesPage & JSXBase.HTMLAttributes<HTMLStoriesPageElement>;
        }
    }
}
