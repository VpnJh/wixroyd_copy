<template>
  <div>
    <img v-lazy="getAssetsImageUrl('/login_image.png')" alt="" />
  </div>
</template>
<script setup>
import { getAssetsImageUrl } from "@/utils/index.utils.js";
</script>
