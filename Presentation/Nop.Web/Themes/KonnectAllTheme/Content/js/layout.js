
class DecoraCrafts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="container decora-crafts">
        <div class="row">
            <div class="col-md-3 col-sm-3 left-content">
                <div></div>
                <img src="./assets/img/b2b-category/decora-craft/chocola-cake.webp" class="img-decora" alt="chocola-cake">
                <div class="content-decora-sect ">
                    <div class="font-light text-white text-small">chocolate</div>
                    <h2 class="text-white text-left">Chocolate Cake</h2>
                    <a href="#" class="btn-sm-white">
                        <span class="text-white font-normal">shop now</span></a>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 center-content">
                <img src="./assets/img/b2b-category/decora-craft/decora-craft.webp" class="img-decora" alt="decora-craft">
                <div class="content-decora-sect content-center">
                    <div class="font-light text-white text-small">big & fetch offers</div>
                    <h2 class="text-white text-left">Decora & Crafts</h2>
                    <a href="#" class="btn-sm-white">
                        <span class="text-white font-normal">shop now</span></a>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 right-content">
                <img src="./assets/img/b2b-category/decora-craft/medical-equipement.webp" class="img-decora" alt="medical">
                <div class="content-decora-sect ">
                    <div class="font-light text-white text-small">medical equipement</div>
                    <h2 class="text-white text-left">Stethoscope Scrubs</h2>
                    <a href="#" class="btn-sm-white">
                        <span class="text-white font-normal">shop now</span></a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 mobile-content">
            <img src="./assets/img/b2b-category/decora-craft/decora-craft.png" class="img-decora" alt="craft">
            <div class="content-decora-sect content-center">
                <div class="font-light text-white text-small">big & fetch offers</div>
                <h2 class="text-white text-left">Decora & Crafts</h2>
                <a href="#" class="btn-sm-white">
                    <span class="btn-sm text-white  font-normal">shop now</span></a>
            </div>
        </div>
    </section>
        `
    }
}
customElements.define('my-decoracrafts', DecoraCrafts)

class OurClients extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="container our-clients">
        <div class="content-our-client">
            <div class="title-sec">
                <h4 class="text-black text-left">
                    our clients</h4>
                    <span class="line-after"></span>
            </div>
            <div class="brand-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/seara.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/zeem-corporation.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/esnad.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/inma.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/alkifeh-contacting.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/maaden.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/heights.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/united-group.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/jawhara-factory.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/bytes-future.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/railway-saudi-arabia.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/suw.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/elbath.png" class="logo-clients">
                    <img alt="" src="./assets/img/b2b-category/our-client/midicul.png" class="logo-clients">
            </div>
        </div>
    </section>
        `
    }
}
customElements.define('our-clients', OurClients)

class MyNewsletter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="newsletter">
            <div class="container">
                <div class="content-newsletter row">
                    <div class="col-md-6">
                        <h3 class="text-left">
                            Join our Newsletter!
                        </h3>
                        <p data-qe-id="form-description" class="">
                            Subscribe to the newsletter to be the first to know what's new,
                            specials and exclusive promotions! 
                        </p>
                    </div>

                    <div class="col-md-6">
                        <form>
                            <input required="" type="email" name="email" placeholder="Enter your Email">
                            <a href="#" class="btn btn-primary text-black newsletter-btn">SUBSCRIBE</a>
                        </form>
                        <p>We care about the protection of your data</p>
                    </div>
                </div>
                <span class="arrow-bottom"></span>
            </div>
        </div>
        `
    }
}
customElements.define('my-newsletter', MyNewsletter)

class MiddleBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="container middle-banner">
            <img alt="" src="./assets/img/b2b-category/banner-middle.png" class="banner-middle">

            <div class="content-banner">
                <div class="number text-yellow-light font-bold">25</div>
                <h3 class="percent text-uppercase text-yellow-light">% off</h3>
                <div class="line-separate"></div>
                <div class="desc-content">
                    <h3 class="text-capitalize text-white">fresh green vegetables</h3>
                    <a href="#" class="btn-sm-white">
                        <span class="text-white font-normal">shop now</span>
                    </a>
                </div>
            </div>
        </section>
        `
    }
}
customElements.define('middle-banner', MiddleBanner)
