<template>
  <div class="page-wrapper">
    <Header />
    <Slider />
    <Main />
    <Featureproduct />
    <Categorytab />
    <Sellingproduct />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from './home/components/Slider.vue';
import Main from '@/components/Main.vue'; 
import Featureproduct from './home/components/Featureproduct.vue';
import Categorytab from './home/components/Categorytab.vue';
import Sellingproduct from './home/components/Sellingproduct.vue';
import Footer from '@/components/Footer.vue'; 

export default {
  components: {
    Header,
    Slider,
    Main,
    Featureproduct,
    Categorytab,
    Sellingproduct,
    Footer,
  }
}
</script>
