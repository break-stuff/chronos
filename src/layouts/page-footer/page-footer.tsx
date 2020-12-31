import { Component, h, Host } from '@stencil/core';


@Component({
    tag: 'page-footer',
    styleUrl: 'page-footer.scss'
})
export class PageFooter {



    render() {
        return (
            <Host class="page-footer" role="contentinfo">
                <div class="footer-wrapper">
                    <stencil-route-link url="/profile/stencil">
                        <ks-button>Subscribe</ks-button>
                    </stencil-route-link>

                    <ks-button shows="test_modal" color="secondary">Test Button</ks-button>
                    <ks-modal modal-title="Test Modal" id="test_modal"> this is a really long special modal with some great text.</ks-modal>
                    <p>Hello PageFooter!</p>
                </div>
            </Host>
        );
    }
}
