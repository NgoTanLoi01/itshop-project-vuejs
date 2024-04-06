<!-- Home.vue: -->
<template>
    <div class="page-wrapper">
      <Slider />
      <Featureproduct />
      <Categorytab />
      <Sellingproduct />
    </div>
  </template>
  
  <script>
  import Slider from '../components/Slider.vue';
  import Featureproduct from '../components/Featureproduct.vue';
  import Categorytab from '../components/Categorytab.vue';
  import Sellingproduct from '../components/Sellingproduct.vue';
  
  export default {
    components: {
      Slider,
      Featureproduct,
      Categorytab,
      Sellingproduct,
    }
  }
  </script>
  
  
  