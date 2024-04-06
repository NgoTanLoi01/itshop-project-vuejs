<template>

    <div class="container top">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Top Selling Products</h2><!-- End .title -->
            </div><!-- End .heading-left -->

            <div class="heading-right">
                <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="top-all-link" data-toggle="tab" href="#top-all-tab" role="tab"
                            aria-controls="top-all-tab" aria-selected="true">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="top-tv-link" data-toggle="tab" href="#top-tv-tab" role="tab"
                            aria-controls="top-tv-tab" aria-selected="false">TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="top-computers-link" data-toggle="tab" href="#top-computers-tab"
                            role="tab" aria-controls="top-computers-tab" aria-selected="false">Computers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="top-phones-link" data-toggle="tab" href="#top-phones-tab" role="tab"
                            aria-controls="top-phones-tab" aria-selected="false">Tablets & Cell Phones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="top-watches-link" data-toggle="tab" href="#top-watches-tab" role="tab"
                            aria-controls="top-watches-tab" aria-selected="false">Smartwatches</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="top-acc-link" data-toggle="tab" href="#top-acc-tab" role="tab"
                            aria-controls="top-acc-tab" aria-selected="false">Accessories</a>
                    </li>
                </ul>
            </div><!-- End .heading-right -->
        </div><!-- End .heading -->

        <div class="tab-content tab-content-carousel just-action-icons-sm">
            <div class="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <span class="product-label label-circle label-sale">Sale</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-14.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Cell Phone</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                <span class="new-price">$35.41</span>
                                <span class="old-price">Was $41.67</span>
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 10 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #edd2c8;"><span class="sr-only">Color
                                        name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-15.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">TV & Home Theater</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 5 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane p-0 fade" id="top-tv-tab" role="tabpanel" aria-labelledby="top-tv-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <span class="product-label label-circle label-sale">Sale</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-14.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Cell Phone</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                <span class="new-price">$35.41</span>
                                <span class="old-price">Was $41.67</span>
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 10 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #edd2c8;"><span class="sr-only">Color
                                        name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-15.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">TV & Home Theater</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 5 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane p-0 fade" id="top-computers-tab" role="tabpanel" aria-labelledby="top-computers-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-15.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">TV & Home Theater</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 5 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <span class="product-label label-circle label-sale">Sale</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-14.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Cell Phone</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                <span class="new-price">$35.41</span>
                                <span class="old-price">Was $41.67</span>
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 10 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #edd2c8;"><span class="sr-only">Color
                                        name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane p-0 fade" id="top-phones-tab" role="tabpanel" aria-labelledby="top-phones-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-15.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">TV & Home Theater</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 5 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <span class="product-label label-circle label-sale">Sale</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-14.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Cell Phone</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                <span class="new-price">$35.41</span>
                                <span class="old-price">Was $41.67</span>
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 10 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #edd2c8;"><span class="sr-only">Color
                                        name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane p-0 fade" id="top-watches-tab" role="tabpanel" aria-labelledby="top-watches-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <span class="product-label label-circle label-sale">Sale</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-14.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Cell Phone</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                <span class="new-price">$35.41</span>
                                <span class="old-price">Was $41.67</span>
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 10 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #edd2c8;"><span class="sr-only">Color
                                        name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane p-0 fade" id="top-acc-tab" role="tabpanel" aria-labelledby="top-acc-link">
                <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                "nav": true, 
                                "dots": false,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-15.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">TV & Home Theater</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 5 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-top">Top</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-11.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptops</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                            <!-- End .product-title -->
                            <div class="product-price">
                                $1,199.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-12.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Audio</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                            </h3><!-- End .product-title -->
                            <div class="product-price">
                                $79.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 6 Reviews )</span>
                            </div><!-- End .rating-container -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->

                    <div class="product product-2">
                        <figure class="product-media">
                            <span class="product-label label-circle label-new">New</span>
                            <a href="product.html">
                                <img src="frontend/assets/images/demos/demo-3/products/product-13.jpg"
                                    alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to
                                        wishlist</span></a>
                            </div><!-- End .product-action -->

                            <div class="product-action product-action-dark">
                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to
                                        cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview"
                                    title="Quick view"><span>quick view</span></a>
                            </div><!-- End .product-action -->
                        </figure><!-- End .product-media -->

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Tablets</a>
                            </div><!-- End .product-cat -->
                            <h3 class="product-title"><a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi
                                    256GB </a></h3><!-- End .product-title -->
                            <div class="product-price">
                                $899.99
                            </div><!-- End .product-price -->
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                </div><!-- End .ratings -->
                                <span class="ratings-text">( 4 Reviews )</span>
                            </div><!-- End .rating-container -->

                            <div class="product-nav product-nav-dots">
                                <a href="#" style="background: #edd2c8;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                                <a href="#" class="active" style="background: #333333;"><span class="sr-only">Color
                                        name</span></a>
                            </div><!-- End .product-nav -->
                        </div><!-- End .product-body -->
                    </div><!-- End .product -->
                </div><!-- End .owl-carousel -->
            </div><!-- .End .tab-pane -->
        </div><!-- End .tab-content -->
    </div><!-- End .container -->
    <div class="container">
        <hr class="mt-5 mb-0">
    </div><!-- End .container -->

    <div class="icon-boxes-container mt-2 mb-2 bg-transparent">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="icon-rocket"></i>
                        </span>
                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Shipping</h3><!-- End .icon-box-title -->
                            <p>Orders $50 or more</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="icon-rotate-left"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Returns</h3><!-- End .icon-box-title -->
                            <p>Within 30 days</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="icon-info-circle"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Get 20% Off 1 Item</h3><!-- End .icon-box-title -->
                            <p>when you sign up</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon text-dark">
                            <i class="icon-life-ring"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">We Support</h3><!-- End .icon-box-title -->
                            <p>24/7 amazing services</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div><!-- End .icon-boxes-container -->

    <div class="container">
        <div class="cta cta-separator cta-border-image cta-half mb-0"
            style="background-image: url(frontend/assets/images/demos/demo-3/bg-2.jpg);">
            <div class="cta-border-wrapper bg-white">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="cta-wrapper cta-text text-center">
                            <h3 class="cta-title">Shop Social</h3><!-- End .cta-title -->
                            <p class="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                mauris sit amet orci. </p><!-- End .cta-desc -->

                            <div class="social-icons social-icons-colored justify-content-center">
                                <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i
                                        class="icon-facebook-f"></i></a>
                                <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i
                                        class="icon-twitter"></i></a>
                                <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i
                                        class="icon-instagram"></i></a>
                                <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i
                                        class="icon-youtube"></i></a>
                                <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i
                                        class="icon-pinterest"></i></a>
                            </div><!-- End .soial-icons -->
                        </div><!-- End .cta-wrapper -->
                    </div><!-- End .col-lg-6 -->

                    <div class="col-lg-6">
                        <div class="cta-wrapper text-center">
                            <h3 class="cta-title">Get the Latest Deals</h3><!-- End .cta-title -->
                            <p class="cta-desc">and <br>receive <span class="text-primary">$20 coupon</span> for
                                first shopping</p><!-- End .cta-desc -->

                            <form action="#">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your Email Address"
                                        aria-label="Email Adress" required>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary btn-rounded" type="submit"><i
                                                class="icon-long-arrow-right"></i></button>
                                    </div><!-- .End .input-group-append -->
                                </div><!-- .End .input-group -->
                            </form>
                        </div><!-- End .cta-wrapper -->
                    </div><!-- End .col-lg-6 -->
                </div><!-- End .row -->
            </div><!-- End .bg-white -->
        </div><!-- End .cta -->
    </div><!-- End .container -->
</template>

<script>
export default {

}
</script>

<style></style>