/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722515034", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/20 shadow-lg">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-pink-400 absolute inset-0 translate-z-0 rounded-full blur-3xl opacity-70"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-2xl bg-purple-300">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-3xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#FF69B4" /><stop offset="100%" stop-color="#8A2BE2" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-lg text-pink-200 mb-2">Gain a Comprehensive Understanding of Ethereum Transactions</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 text-4xl font-bold mb-4 text-white"> Real-Time Ethereum Transaction Analysis</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-purple-100">Stay ahead of the curve with our cutting-edge Ethereum transaction analysis app. Monitor new transactions as they occur and gain valuable insights into the ever-evolving Ethereum network.</p></div>
                    <a id="content-cta-button" href="#0" class="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Get Started <span id="content-cta-arrow" class="ml-2">→</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    