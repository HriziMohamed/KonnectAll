class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
        <meta charset="utf-8" />
        <meta name="description" content="konnectall description web site">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="stylesheet" type="text/css" href="./src/form.css">
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
        <title>Konnectall website home</title>
        </head>

        <div class="mobile-menu-wrap" id="mobile-menu">
        <div class="mobile-nav-header">
            <h2 class="mobile-nav-header__title text-left">Main Menu</h2>
            <div id="btn-close" class="btn-close"><i class="fas fa-window-close"></i></div>
        </div>
        <nav class="mobile-menu navigation-menu">
        <ul class="menu">
        
            <li class="menu-item menu-item-has-children accordeon-item ">
                <div class="accordion">
                    <h3>Get to know us</h3>
                 </div>
                
                <div class="panel accordeon_content">
                    <div class="mega-menu-products-inners container">
                        <ul class="top-menu">
                            <li class="top-menu-item">
                                <a href="#">What is Konnect all?</a>
                            </li>
                            <li class="top-menu-item">
                                <a href="about-us.html">About us</a>
                            </li>
                            <li class="top-menu-item">
                                <a href="join-the-team.html">Join the team</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu-item">
                <h3 class="font-normal text-black" href="our-solutions.html">Our Solutions</h3>
            </li>
            <li class="menu-item">
                <h3 class="font-normal text-black" href="#">Technology and Operations</h3>
            </li>
            <li class="menu-item">
                <h3 class="font-normal text-black" href="#">Grossiste dropshipping</h3>
            </li>
            <li class="menu-item">
                <h3 class="font-normal text-black" href="auction.html">Auctions</h3>
            </li>
            <li class="menu-item menu-item-has-children accordeon-item">
                <div class="accordion">
                    <h3>B2B Shop</h3>
                </div>
                <div class="panel accordeon_content">
                <div class="mega-menu-products-inners container">
                    <ul class="top-menu">
                        <li class="top-menu-item">
                            <a href="#">What is Konnect all?</a>
                        </li>
                        <li class="top-menu-item">
                            <a href="about-us.html">About us</a>
                        </li>
                        <li class="top-menu-item">
                            <a href="join-the-team.html">Join the team</a>
                        </li>
                    </ul>
                </div>
            </div>
            </li>
        </ul>
        
        
    </nav>
</div>
<div class="konn-off-layer" id="konn-off-layer"></div>

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
                                    <a href="index.html"><img class="logo" src="./assets/img/header/logo1.png" alt="logo1"></a>
                                </div>
                                <div class="header-main-center">
                                <form class="products-search">
                                    <div class="psearch-content">
                                        <div class="product-cat">
                                                <div class="product-cat-label">All</div>
                                                <select name="product-cat" id="" class="product-cat-dd">
                                                    <option value="0" selected="selected">All</option>
                                                    <option class="level-0" value="clothing-apparel">Clothing &amp; Apparel</option>
                                                    <option class="level-1" value="accessories-clothing-apparel">&nbsp;&nbsp;&nbsp;Accessories</option>
                                                </select>
                                        </div>
                                        <div class="search-wrapper">
                                            <input type="text" name="s" class="search-field" autocomplete="off" placeholder="rechercher...">
                                        </div>
                                        <div class="search-btn">
                                           <a class="submit-btn" href="#">search</a>     
                                        </div>
                                    </div> 
                                </form>
                                </div>
                                <div class="header-main-right">
                                          
                                    <div id="topbar-menu" class="topbar-menu">
                                        <ul class="extras-menu">
                                            <li class="menu-item-wishlist"> 
                                                <a href="#" class="icon-wishlist-contents">
                                                    <span class="lnr lnr-heart"></span>
                                                </a>
                                                <span class="mini-item-counter mini-item-counter--wishlist mf-background-primary">0
                                                </span>
                                            </li>
                                            <li class="menu-item-cart">
                                                <a href="#" class="icon-cart-contents">
                                                    <span class="lnr lnr-cart"></span>
                                                </a>
                                                <span class="mini-item-counter mf-background-primary">0</span>


                                                <div  class="cart-dropdown-wrap">
                                                    <ul>
                                                        <li>
                                                            <div class="shopping-cart-img">
                                                                <a  href="#" class="">
                                                                    <img  alt="" src="./assets/img/product/product1.png">
                                                                </a>
                                                            </div>
                                                            <div class="shopping-cart-title">
                                                                <h6>
                                                                    <a  href="/en/product/b3c0ad0c6caa4e31bd2fd27f5842e981" class="">MINNEN</a>
                                                                </h6>
                                                                <h6>
                                                                    <span >2 × </span>SAR 1620.34
                                                                </h6>
                                                            </div>
                                                            <div class="shopping-cart-delete">
                                                                <a href="#">
                                                                    <i class="fas fa-times"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="shopping-cart-img">
                                                                <a  href="/en/product" class="">
                                                                    <img  alt="" src="./assets/img/product/product2.png">
                                                                </a>
                                                            </div>
                                                            <div class="shopping-cart-title">
                                                                <h6>
                                                                    <a  href="/en/product/b3c0ad0c6caa4e31bd2fd27f5842e981" class="">MINNEN</a>
                                                                </h6>
                                                                <h6>
                                                                    <span >2 × </span>SAR 1620.34
                                                                </h6>
                                                            </div>
                                                            <div class="shopping-cart-delete">
                                                                <a href="#">
                                                                    <i class="fas fa-times"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="shopping-cart-footer">
                                                        <div class="shopping-cart-total">
                                                            <h6>
                                                                <span>Total </span>
                                                                <span >SAR 1620.34</span>
                                                            </h6>
                                                        </div>
                                                        <div class="shopping-cart-button">
                                                            <a href="#" class="btn-outline outline font-normal">View cart</a>
                                                            <a  href="checkout.html" class="btn-outline active font-normal" aria-current="page">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="menu-item-account">
                                                <a href="#" class="menu-item-account">
                                                    <span class="lnr lnr-user"></span>
                                                </a>
                                                <div class="item-account">
                                                    <a href="login.html" class="item-login">
                                                        <span class="login-text">Log in</span>
                                                    </a>
                                                    <a href="#" class="item-register">
                                                        <span class="register-text">Register</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
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
                            <a class="font-medium text-black" href="auction.html">Auctions</a>
                        </li>
                        <li class="menu-item menu-item-has-children">
                            <a class="font-medium text-black" href="shop.html">B2B Shop
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
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" class="data-collection" src="./assets/img/menu/dates-collections.png">
                                                        <span>Date collection</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>

                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/candy-collection.png">
                                                        <span>Candy collection</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/fresh-collection.png">
                                                        <span>Fruit collection</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/fresh-fruit.png">
                                                        <span>Fresh fruit</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/baverages.png">
                                                        <span>Baverages</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/cosmetics.png">
                                                        <span>Cosmetics</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="B2B-category.html">
                                                        <img alt="" src="./assets/img/menu/chocolate.png">
                                                        <span>Chocolate</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/fashion.png">
                                                        <span>Fashion</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/home-&-garden.png">
                                                        <span>Home & Garden</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/electronics.png">
                                                        <span>Electronics</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                        <ul class="dropdown-submenu">
                                                        <div class="row">
                                                            <div class="mega-menu-content col-md-8">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div class="menu-item-mega">
                                                                            <a href="#" class="dropdown-toggle">
                                                                                Laptops & Computers
                                                                            </a>
                                                                        </div>
                                                                        <div class="mega-menu-submenu">
                                                                            <ul class="sub-menu">
                                                                                <li class="menu-item">
                                                                                    <a href="#">Desktop Computers</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Monitors</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Laptops</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Hard Drives & Storage</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Computer Accesssories</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                        
                                                                    <div class="col-md-6">
                                                                        <div class="menu-item-mega">
                                                                            <a href="#" class="dropdown-toggle">
                                                                                Digital Cameras
                                                                            </a>
                                                                        </div>
                                                                        <div class="mega-menu-submenu">
                                                                            <ul class="sub-menu">
                                                                                <li class="menu-item">
                                                                                    <a href="#">Digital SLR Cameras</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Sports & Action Cameras</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Camera Lenses</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Photo Printer</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Digital Memory Cards</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                        
                                                                    <div class="col-md-6">
                                                                        <div class="menu-item-mega">
                                                                            <a href="#" class="dropdown-toggle">
                                                                                TV 1 Video
                                                                            </a>
                                                                        </div>
                                                                        <div class="mega-menu-submenu">
                                                                            <ul class="sub-menu">
                                                                                <li class="menu-item">
                                                                                    <a href="#">TVs</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Home Audio Speakers</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Projectors</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Media Streaming Devices</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                        
                                                                    <div class="col-md-6">
                                                                        <div class="menu-item-mega">
                                                                            <a href="#" class="dropdown-toggle">
                                                                                Cell Phones
                                                                            </a>
                                                                        </div>
                                                                        <div class="mega-menu-submenu">
                                                                            <ul class="sub-menu">
                                                                                <li class="menu-item">
                                                                                    <a href="#">Carrier Phones</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Unlocked Phones</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Phone & Cellphone Cases</a>
                                                                                </li>
                                                                                <li class="menu-item">
                                                                                    <a href="#">Cellphone Chargers</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mega-menu-image col-md-4">
                                                                <img alt="" class="img-menu" src="./assets/img/menu/image-mega-menu.png">
                                                                <div class="content-img">
                                                                    <h6 class="text-white text-left">Deals Of The Week</h6>
                                                                    <h4 class="text-white text-left">Save On Smart EarPhone</h4>
                                                                    <h3 class="text-yellow text-left">20% OFF</h3>
                                                                    <a class="btn btn-primary" href="#"><span>SHOP NOW</span></a>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </ul>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/fourniture.png">
                                                        <span>Furniture</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/medic-equi.png">
                                                        <span>Medical equipement</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/accessoire.png">
                                                        <span>Accessories</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a class="sub-categ-item" href="#">
                                                        <img alt="" src="./assets/img/menu/dates-collections.png">
                                                        <span>All categories</span>
                                                        <i class="fas fa-solid fa-chevron-right" aria-hidden="true"></i></a>
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


                    <form class="products-search">
                        <div class="psearch-content">
                            <div class="product-cat">
                                    <div class="product-cat-label">All</div>
                                    <select name="product-cat" id="" class="product-cat-dd">
                                        <option value="0" selected="selected">All</option>
                                        <option class="level-0" value="clothing-apparel">Clothing &amp; Apparel</option>
                                        <option class="level-1" value="accessories-clothing-apparel">&nbsp;&nbsp;&nbsp;Accessories</option>
                                    </select>
                            </div>
                            <div class="search-wrapper">
                                <input type="text" name="s" class="search-field" autocomplete="off" placeholder="rechercher...">
                            </div>
                            <div class="search-btn">
                            <a class="submit-btn" href="#"><i class="fas fa-search" aria-hidden="true"></i></a>     
                            </div>
                        </div> 
                    </form>

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
                                <a href="shop.html">B2B Shop</a>
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
                            <img alt="" class="social-media" src="./assets/img/share/facebook.png">
                            <img alt="" class="social-media" src="./assets/img/share/twitter.png">
                            <img alt="" class="social-media" src="./assets/img/share/instagram.png">
                            <img alt="" class="social-media" src="./assets/img/share/linkedin.png">
                            <img alt="" class="social-media" src="./assets/img/share/youtube.png">
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

function mobile_menu_toggle() {
    var toggle = document.getElementById('toggle-menu');
    var mobMenuWrap = document.getElementById("mobile-menu");
    var layerOff = document.getElementById("konn-off-layer");
    var close = document.getElementById('btn-close');

    toggle.onclick = function () {
        mobMenuWrap.classList.toggle('open');
        layerOff.classList.toggle('visible');
    }
    
    close.onclick = function (e) {
        mobMenuWrap.classList.toggle('open');
        layerOff.classList.toggle('visible');
    }
}

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

window.onload = function () {
    mobile_menu_toggle();
};