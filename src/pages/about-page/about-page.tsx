import { Component, h } from '@stencil/core';


@Component({
    tag: 'about-page',
    // styleUrl: 'about-page.css'
})
export class AboutPage {



    render() {
        return (
            <div class="mx-auto w-50 md:w-75 sm:w-100 my-xl p-xxxl b-xxxs bg-white">
                <h1>About This Site</h1>

                <p>This site is built <strong>without any JavaScript frameworks</strong>! I know what some of you are thinking:</p>

                <p><em>"Why would you do that to yourself???"</em></p>

                <p>
                    Don't get me wrong, I am a huge fan of front-end frameworks.
                    They provide a lot of great tools and features that make developer's lives easier.
                    The downside to them is that they also come at a price: the size of the framework itself, additional code required to compose components and layouts, as well as the time it takes for the framework to render the code.
                </p>

                <h2>Objective</h2>

                <p>
                    The goal of this project was to see how hard it would be to get the same great user and developer experience of those frameworks, but as lean and as light as possible.
                    As it turns out, it wasn't very hard thanks to some great tools.
                    Not only that, because the runs without a framework and is rendered by the browser rather than by a framework, it's <em>wicked</em> fast!
                </p>

                <h2>Performance</h2>

                <p>
                    Thanks to the tools mentioned below, this site compiles down to standards-based web components.
                    Web components have been around for a while, but their browser support hasn't been that great.
                    That is no longer the case! Support is pretty decent and what isn't supported is pretty easily polyfilled.
                    Now, you can bundle up your components and render them using the browser rather than a JavaScript library (which, again, makes them incredibly fast).
                </p>

                <h2>Tools</h2>

                <p>
                    There were a few tools and libraries used to make building this site much easier:

                    <ul>
                        <li><ks-button target="_blank" display="link" class="text-bold" href="https://stenciljs.com/">Stencil</ks-button> - For compiling the pages, layouts, and component into web components</li>
                        <li><ks-button target="_blank" display="link" class="text-bold" href="https://github.com/ionic-team/stencil-router/wiki">Stencil Router</ks-button> - For providing the Single-Page Application (SPA) routing</li>
                        <li><ks-button target="_blank" display="link" class="text-bold" href="https://stenciljs.com/docs/stencil-store#stencil-store">Stencil Store</ks-button> - For state management</li>
                        <li><ks-button target="_blank" display="link" class="text-bold" href="https://kickstand-ui.com/">Kickstand UI</ks-button> - The design system and UI library to build the site</li>
                    </ul>

                </p>

                <p>If you haven't had a chance to play with any of these tools, I highly recommend them.</p>

                <h2>Media</h2>

                <p>We are grateful for the following talented artists at <ks-button href="https://unsplash.com/" display="link" target="_blank">Unsplash</ks-button> for providing the stock photos:</p>

                <ul>
                    <li>
                        <ks-button display="link" target="_blank" href="https://unsplash.com/@andrea_natali?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andrea Natali</ks-button>
                    </li>
                    <li>
                        <ks-button display="link" target="_blank" href="https://unsplash.com/@alex_andrews?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alexander Andrews</ks-button>
                    </li>
                    <li>
                        <ks-button display="link" target="_blank" href="https://unsplash.com/@janfillem?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">JanFillem</ks-button>
                    </li>
                </ul>



                <h2>Trademarks</h2>

                <p>ALLIED, AMERICAN DOCUMENTS, CAVATINA, COMMAND URBAN, E LOGO, EASY READER, EXPEDITION, FAMILYCONNECT, FAST WRAP, FLEX TECH, INDIGLO, ICONNECT LOGO, INTELLIGENT QUARTZ, IQ+, IT TAKES A LICKING AND KEEPS - TICKING, KEEP - TICKING, MARATHON, MARLIN, MK1, NIGHT-MODE, PERFECT DATE, QUICKDATE, SLEEK, SPECIALISTS IN THE ART OF TIMEKEEPING, SUPERNOVA, TAPSCREEN, TIME MACHINES, TIME-FACTORY, TIMEX, TIMEX COMMAND, TIMEX IN MAP LOGO, TRANSCEND, TRIATHLON, TRIBUTE, TRUE SINCE 1854 TIMEX, VARIETY, VIEWPOINT, WEEKENDER, WE DON’T STOP and the Triathlon watch design are trademarks of Timex Group B.V. and its subsidiaries.</p>

                <p>IRONMAN® and MDOT are registered trademarks of World Triathlon Corporation. Used here by permission.</p>

                <p>SiRF and the SiRF logo are registered trademarks of CSR. SiRFstarIV is a trademark of CSR.</p>

                <p>ANT+ and the ANT+ Logo are trademarks of Dynastream Innovations, Inc.</p>

                <p>SWAROVSKI is a registered trademark of Swarovski Aktiengesellschaft.</p>

                <p>Runkeeper is a registered trademark of FitnessKeeper, Inc.  The Running Man Icon is a trademark of FitnessKeeper, Inc.  Both trademarks are used by Timex by permission.</p>

                <p>The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Timex is under license.</p>

                <p>IOS is a trademark or registered trademark of Cisco in the US and other countries and is used under license.</p>

            </div>
        );
    }
}
