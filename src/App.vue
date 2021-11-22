<template>
  <div id="main" class="h-full">
   <div class="w-full md:w-1/3 bg-gray-100 h-screen p-6 m-auto">
     <router-view></router-view>
   </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

@font-face {
  font-family: 'Poppins';
  src: url('./assets/Poppins-Regular.ttf');
}
  html,body{
    width: auto;
    height: auto;
    font-family:'Poppins' !important;
  }
 
  #main,#app{
    width: 100%;
    height: 100%;
 position: relative;
  }

</style>