<template>
  <div class="pt-[200px]">
    <LayoutHeader />
    <router-view />
    <LayoutFooter />
  </div>
</template>
<script setup>
import LayoutHeader from "./components/layoutHeader/index.vue";
import LayoutFooter from "./components/layoutFooter/index.vue";
</script>
