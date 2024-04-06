<template>
    <div class="page-wrapper">
      <Slider />
      <Featureproduct />
      <Categorytab />
      <Sellingproduct />
    </div>
  </template>
  
  <script>
  import Slider from '../components/product/Slider.vue';
  import Featureproduct from '../components/product/Featureproduct.vue';
  import Categorytab from '../components/product/Categorytab.vue';
  import Sellingproduct from '../components/product/Sellingproduct.vue';
  
  export default {
    components: {
      Slider,
      Featureproduct,
      Categorytab,
      Sellingproduct,
    }
  }
  </script>