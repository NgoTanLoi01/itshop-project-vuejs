<template>
    <div class="intro-section pt-3 pb-3 mb-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                        <div class="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside" data-toggle="owl"
                            data-owl-options='{
                                        "nav": false, 
                                        "dots": true,
                                        "responsive": {
                                            "768": {
                                                "nav": true,
                                                "dots": false
                                            }
                                        }
                                    }'>
                            <div class="intro-slide">
                                <figure class="slide-image">
                                    <picture>
                                        <source media="(max-width: 480px)"
                                            srcset="frontend/assets/images/demos/demo-3/slider/slide-1-480w.jpg">
                                        <img src="frontend/assets/images/demos/demo-3/slider/slide-1.jpg"
                                            alt="Image Desc">
                                    </picture>
                                </figure><!-- End .slide-image -->

                                <div class="intro-content">
                                    <h3 class="intro-subtitle text-primary">Daily Deals</h3>
                                    <!-- End .h3 intro-subtitle -->
                                    <h1 class="intro-title">
                                        AirPods <br>Earphones
                                    </h1><!-- End .intro-title -->

                                    <div class="intro-price">
                                        <sup>Today:</sup>
                                        <span class="text-primary">
                                            $247<sup>.99</sup>
                                        </span>
                                    </div><!-- End .intro-price -->

                                    <a href="category.html" class="btn btn-primary btn-round">
                                        <span>Click Here</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div><!-- End .intro-content -->
                            </div><!-- End .intro-slide -->

                            <div class="intro-slide">
                                <figure class="slide-image">
                                    <picture>
                                        <source media="(max-width: 480px)"
                                            srcset="frontend/assets/images/demos/demo-3/slider/slide-2-480w.jpg">
                                        <img src="frontend/assets/images/demos/demo-3/slider/slide-2.jpg"
                                            alt="Image Desc">
                                    </picture>
                                </figure><!-- End .slide-image -->

                                <div class="intro-content">
                                    <h3 class="intro-subtitle text-primary">Deals and Promotions</h3>
                                    <!-- End .h3 intro-subtitle -->
                                    <h1 class="intro-title">
                                        Echo Dot <br>3rd Gen
                                    </h1><!-- End .intro-title -->

                                    <div class="intro-price">
                                        <sup class="intro-old-price">$49,99</sup>
                                        <span class="text-primary">
                                            $29<sup>.99</sup>
                                        </span>
                                    </div><!-- End .intro-price -->

                                    <a href="category.html" class="btn btn-primary btn-round">
                                        <span>Click Here</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div><!-- End .intro-content -->
                            </div><!-- End .intro-slide -->
                        </div><!-- End .intro-slider owl-carousel owl-simple -->

                        <span class="slider-loader"></span><!-- End .slider-loader -->
                    </div><!-- End .intro-slider-container -->
                </div><!-- End .col-lg-8 -->

                <div class="col-lg-4">
                    <div class="intro-banners">
                        <div class="banner mb-lg-1 mb-xl-2">
                            <a href="#">
                                <img src="frontend/assets/images/demos/demo-3/banners/banner-1.jpg" alt="Banner">
                            </a>

                            <div class="banner-content">
                                <h4 class="banner-subtitle d-lg-none d-xl-block"><a href="#">Top Product</a></h4>
                                <!-- End .banner-subtitle -->
                                <h3 class="banner-title"><a href="#">Edifier <br>Stereo Bluetooth</a></h3>
                                <!-- End .banner-title -->
                                <a href="#" class="banner-link">Shop Now<i class="icon-long-arrow-right"></i></a>
                            </div><!-- End .banner-content -->
                        </div><!-- End .banner -->

                        <div class="banner mb-lg-1 mb-xl-2">
                            <a href="#">
                                <img src="frontend/assets/images/demos/demo-3/banners/banner-2.jpg" alt="Banner">
                            </a>

                            <div class="banner-content">
                                <h4 class="banner-subtitle d-lg-none d-xl-block"><a href="#">Clearance</a></h4>
                                <!-- End .banner-subtitle -->
                                <h3 class="banner-title"><a href="#">GoPro - Fusion 360 <span>Save $70</span></a>
                                </h3><!-- End .banner-title -->
                                <a href="#" class="banner-link">Shop Now<i class="icon-long-arrow-right"></i></a>
                            </div><!-- End .banner-content -->
                        </div><!-- End .banner -->

                        <div class="banner mb-0">
                            <a href="#">
                                <img src="frontend/assets/images/demos/demo-3/banners/banner-3.jpg" alt="Banner">
                            </a>

                            <div class="banner-content">
                                <h4 class="banner-subtitle d-lg-none d-xl-block"><a href="#">Featured</a></h4>
                                <!-- End .banner-subtitle -->
                                <h3 class="banner-title"><a href="#">Apple Watch 4 <span>Our Hottest
                                            Deals</span></a></h3><!-- End .banner-title -->
                                <a href="#" class="banner-link">Shop Now<i class="icon-long-arrow-right"></i></a>
                            </div><!-- End .banner-content -->
                        </div><!-- End .banner -->
                    </div><!-- End .intro-banners -->
                </div><!-- End .col-lg-4 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div><!-- End .intro-section -->
</template>

<script>
export default {

}
</script>

<style></style>