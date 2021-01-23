import { Component, h, State } from '@stencil/core';


@Component({
    tag: 'contact-page',
    // styleUrl: 'contact-page.css'
})
export class ContactPage {

    @State() isSubmitted: boolean = false;

    render() {
        return (
            <div class="w-50 mx-auto md:w-75 sm:w-100 p-xxl my-xxl b-xxxs bg-white">
                <h1>Contact Us</h1>
                {this.isSubmitted
                    ? <div class="text-lg my-xl">Thank you for reaching out!</div>
                    : <ks-form onSubmitted={(e) => this.isSubmitted = e.detail.isValid}>
                        <ks-form-field label="Name" required></ks-form-field>
                        <ks-form-field label="Email" type="email" required></ks-form-field>
                        <ks-form-field label="Comment" type="textarea" required></ks-form-field>
                        <div class="text-right">
                            <ks-button type="submit">Submit</ks-button>
                        </div>
                    </ks-form>}
                <div class="text-italic pt-lg">This is a demo site and this form does not actually do anything. If you are interested in reaching out, feel free to contact me on twitter (<ks-button href="https://twitter.com/stuffbreaker" display="link" target="_blank">@stuffbreaker</ks-button>) or on <ks-button href="https://github.com/break-stuff" target="_blank" display="link">GitHub</ks-button>.</div>
            </div>
        );
    }
}
