
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.0/css/all.css">


            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="stylesheet" type="text/css" href="./src/form.css">
            <script type="module" src="./assets/js/main.js"></script>
            <title>Konnectall website home</title>
        </head>
        <section class="header" id="header">


        <div id="top-promotion" class="top-promotion promotion style-1">
            <div class="container">
                <div class="promotion-content">
                    <div class="promo-inner">
                        <div class="promo-left">
                                <h2 class="percent primary-color">20%</h2>
                            <div>
                            <span class="label">Discount</span>
                            <h3>For Books Of March</h3>
                        </div>
                    </div>
                    <div class="promo-right">
                        <span class="label">Enter Prmotion Code</span>
                        <h4 class="primary-color">Sale2023</h4>
                    </div>
                </div>
                <div class="promo-link">
                <a class="link" href="https://wpmartfury.com/marketplace/product/grand-slam-indoor-of-show-jumping-novel/">Shop Now</a>
                </div>
            </div>
        </div>
    </div>






    <div id="topbar" class="topbar ">
    <div class="container">
        <div class="row topbar-row">
            <div class="topbar-left topbar-sidebar col-xs-12 col-sm-12 col-md-5 hidden-xs hidden-sm">
                <div id="custom_html-1" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">Welcome to Konnectall Online Shopping Store !</div>
                </div>
            </div>


            <div class="topbar-right topbar-sidebar col-xs-12 col-sm-12 col-md-7 hidden-xs hidden-sm">
                <div id="custom_html-2" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">
                        <div id="lang_sel">
                            <ul>
                                <li>
                                    <a href="#" class="lang_sel_sel icl-en">

                                        English
                                        <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </a>
                                    <ul>
                                        <li class="icl-fr">
                                            <a href="#">

                                                French
                                            </a>
                                        </li>
                                        <li class="icl-de">
                                            <a href="#">
                                                German
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="custom_html-3" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">
                        <div class="mf-currency-widget">
                            <div class="widget-currency">
                                <span class="current">US Dollar
                                <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                                <ul>
                                    <li class="actived"><a href="#"
                                            class="woocs_flag_view_item woocs_flag_view_item_current"
                                            data-currency="USD">US Dollar</a></li>
                                    <li><a href="#" class="woocs_flag_view_item" data-currency="EUR">European Euro</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="custom_html-4" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget"> <a href="#">Track Your Order</a></div>
                </div>
                <div id="custom_html-5" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget"> <a href="#">Store Location</a></div>
                </div>
            </div>

            <div class="topbar-mobile topbar-sidebar col-xs-12 col-sm-12 hidden-lg hidden-md">
                <div id="custom_html-6" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">
                        <div class="mf-currency-widget">
                            <div class="widget-currency">
                                <span class="current">US Dollar
                                <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></span>
                                <ul>
                                    <li class="actived"><a href="#"
                                            class="woocs_flag_view_item woocs_flag_view_item_current"
                                            data-currency="USD">US Dollar</a></li>
                                    <li><a href="#" class="woocs_flag_view_item" data-currency="EUR">European Euro</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="custom_html-7" class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">
                        <div id="lang_sel">
                            <ul>
                                <li>
                                    <a href="#" class="lang_sel_sel icl-en">
                                        English
                                        <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </a>
                                    <ul>
                                        <li class="icl-fr">
                                            <a href="#">

                                                French
                                            </a>
                                        </li>
                                        <li class="icl-de">
                                            <a href="#">

                                                German
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>



















        <div class="header-main">
            <div class="container clearfix">
                <div class="header-main-left">
                    <a href="index.html"><img class="logo" src="./assets/img/header/logo1.png">
                </div>
                <div class="header-main-right">
                    <div id="search-mobile" class="search-mobile">
                        <img class="search-icon" src="./assets/img/header/search.png">
                        <input type="text" placeholder="search">
                        <div class="close-btn">
                            <img src="" class="btn-close" id="btn-close">
                        </div>
                    </div>
                    <div id="topbar-menu" class="topbar-menu">
                        <div class="search">
                            <input type="text" placeholder="search">
                            <img id="search-icon" class="search-icon" src="./assets/img/header/search.png">
                        </div>
                        <a href="#" class="btn btn-login">login in</a>
                        <a href="#" class="btn btn-account">Create account</a>
                        <a href="#"><img class="brand-icon" src="./assets/img/header/brand.png"></a>
                        <a href="#" class="icon-cart"><img class="cart-icon" src="./assets/img/header/cart.png"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar">
            <div class="container">
                <div class="horizantal-menu">
                    <ul class="menu">
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="get-to-know.html">Get to know us
                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a></a>
                            <div class="mega-menu-wrap">
                                <div class="mega-menu-products-inners container">
                                    <ul class="top-menu">
                                        <li class="top-menu-item">
                                            <a href="#">What is Konnect all?</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">About us</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Join the team</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="our-solutions.html">Our Solutions
                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="#">Technology and Operations
                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="#">Grossiste dropshipping
                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                        </li>
                        <li class="menu-item">
                            <a class="font-medium text-black" href="#">Auctions</a>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="B2B-category.html">B2B Shop
                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                            </a>
                            <div class="mega-menu-wrap">
                                <div class="mega-menu-products-inners container">
                                    <ul class="top-menu">
                                        <li class="top-menu-item">
                                            <a href="#">All Categories
                                            <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                                           
                                            <div class="menu-children">
                                            <div class="product-menu-item">
                                                <ul class="top-1v1-menu">
                                                    <li>
                                                        <a href="#">
                                                        <img class="data-collection" src="./assets/img/menu/dates-collections.png">
                                                        <span>Date collection</span>
                                                        <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/candy-collection.png">
                                                        <span>Candy collection</span>
                                                        <i class="fas fa-solid fa-chevron-down" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/fresh-collection.png">
                                                        <span>Fruit collection</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/fresh-fruit.png">
                                                        <span>Fresh fruit</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/baverages.png">
                                                        <span>Baverages</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/cosmetics.png">
                                                        <span>Cosmetics</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/chocolate.png">
                                                        <span>Chocolate</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/fashion.png">
                                                        <span>Fashion</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/home-&-garden.png">
                                                        <span>Home & Garden</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/electronics.png">
                                                        <span>Electronics</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/fourniture.png">
                                                        <span>Furniture</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/medic-equi.png">
                                                        <span>Medical equipement</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/accessoire.png">
                                                        <span>Accessories</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src="./assets/img/menu/dates-collections.png">
                                                        <span>All categories</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">New Products</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Top-Selling</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Hot deals</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Back in Stock</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Refurbished</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">By supplier</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">Gifts</a>
                                        </li>
                                        <li class="top-menu-item">
                                            <a href="#">See All</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mobile-display">
                    <div class="toggle-nav-menu" id="toggle-menu">
                        <div class="burg-icon">
                            <div class="burg"></div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu-wrap" id="mobile-menu">
                    <nav class="mobile-menu navigation-menu">
                        <ul class="menu">
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">Get to know us</a>
                            </li>
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">Our Solutions</a>
                            </li>
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">Technology and Operations</a>
                            </li>
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">Grossiste dropshipping</a>
                            </li>
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">Auctions</a>
                            </li>
                            <li class="menu-item">
                                <a class="font-medium text-black" href="#">B2B Shop</a>
                               
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section> 
        `
    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="footer">
        <div class="footer-midelle">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 mb-3">
                        <h6 class="title text-left">About us</h6>
                        <ul class="link-footer">
                            <li>
                                <a href="about-us.html">About us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">History</a>
                            </li>
                            <li>
                                <a href="join-the-team.html">Join the team</a>
                            </li>
                            <li>
                                <a href="#">Become a customer</a>
                            </li>
                            <li>
                                <a href="#">Become a supplier</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 mb-3">
                        <h6 class="title text-left">Drosphopping wholesaler</h6>
                        <ul class="link-footer">
                            <li>
                                <a href="#">Dropshipping Service</a>
                            </li>
                            <li>
                                <a href="#">Wholesale Selling</a>
                            </li>
                            <li>
                                <a href="#">All-in-one supplier</a>
                            </li>
                            <li>
                                <a href="#">Wholesaler Packs</a>
                            </li>
                            <li>
                                <a href="#">Dropshipping 360° Store</a>
                            </li>
                            <li>
                                <a href="#">Points Catalogue</a>
                            </li>
                            <li>
                                <a href="#">Online sales channels</a>
                            </li>
                            <li>
                                <a href="#">Social Selling</a>
                            </li>
                            <li>
                                <a href="#">Winning Products</a>
                            </li>
                            <li>
                                <a href="#">Marketing Resources</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-sm-6 mb-2">
                        <h6 class="title text-left">Resources</h6>
                        <ul class="link-footer">
                            <li>
                                <a href="#">Academy</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Helpcenter</a>
                            </li>
                            <li>
                                <a href="#">B2B Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4 col-sm-6 last-footer-sec">
                        <div class="content-footer">
                            <h6 class="title text-left">Solutions for</h6>
                            <p>For dropshipping and wholesale purchasing</p>
                            <p>Brands ans suppliers with stock</p>
                            <h6 class="title text-left">Technology and operations for</h6>
                            <p>dropshipping and wholesale purchasing</p>
                            <p>Brands ans suppliers with stock</p>
                        </div>
                        <div class="social-icon">
                            <img class="social-media" src="./assets/img/share/facebook.png">
                            <img class="social-media" src="./assets/img/share/twitter.png">
                            <img class="social-media" src="./assets/img/share/instagram.png">
                            <img class="social-media" src="./assets/img/share/linkedin.png">
                            <img class="social-media" src="./assets/img/share/youtube.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="left-footer">
                    <p>2022. All right reserved.</p>
                </div>
                <div class="right-footer">
                    <ul>
                        <li>
                            <a href="#">From of payment</a>
                        </li>
                        <li>
                            <a href="#">Delivery and Shipment</a>
                        </li>
                        <li>
                            <a href="#">Taxes</a>
                        </li>
                        <li>
                            <a href="#">Guarantee</a>
                        </li>
                        <li>
                            <a href="#">General terms and conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Legal notice</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        `
    }
}
customElements.define('my-footer', MyFooter)

class MyNewsletter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="newsletter">
            <div class="container">
                <div class="content-newsletter">
                    <h3>
                        Subscribe to our newsletter!
                    </h3>
                        <form>
                            <input type="text" placeholder="Entrer you email address" name="email">
                            <select name="lang" aria-placeholder="Choose language" placeholder="Entrer you email address">
                                <option value="Choose language">Choose language</option>
                                <option value="fr">Fr</option>
                                <option value="ar">Ar</option>
                            </select>
                        </form>
                </div>
            </div>
            <span class="arrow-bottom"></span>
        </div>
        `
    }
}
customElements.define('my-newsletter', MyNewsletter)

function search_display_mobile() {
    var searchIcon = document.getElementById('search-icon');
    var topMenu = document.getElementById('topbar-menu');
    var searchMobile = document.getElementById('search-mobile');
    searchIcon.onclick = function () {
        searchMobile.classList.toggle('visible');
        topMenu.style.display = "none";
    }
    var close = document.getElementById("btn-close");
    console.log(close);
    document.getElementById("btn-close").onclick = function () {
        if ((searchMobile.classList.contains('visible'))) {
            searchMobile.classList.remove('visible');
            topMenu.style.display = "flex";
        }
    }
}

function mobile_menu_toggle() {
    var toggle = document.getElementById('toggle-menu');
    // console.log(toggle);
    toggle.onclick = function () {
        var mobMenuWrap = document.getElementById("mobile-menu");
        mobMenuWrap.classList.toggle('open');
    }
}

function mobile_menu_toggle() {
    var toggle = document.getElementById('toggle-menu');
    console.log(toggle);
    toggle.onclick = function () {
        var mobMenuWrap = document.getElementById("mobile-menu");
        mobMenuWrap.classList.toggle('open');
    }
}

window.onload = function () {
    search_display_mobile();
    mobile_menu_toggle();
    setupListenerFunction();
    intiSlid();
   
};





