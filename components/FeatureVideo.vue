<template>
  <video
    v-if="isDark"
    autoplay
    muted
    loop
    playsinline
    class="w-full rounded-xs shadow-lg"
  >
    <source :src="withBase('../videos/' + props.dark)" type="video/webm" />
  </video>
  <video
    v-else
    autoplay
    muted
    loop
    playsinline
    class="w-full rounded-xs shadow-lg"
  >
    <source :src="withBase('../videos/' + props.light)" type="video/webm" />
  </video>
</template>

<script setup>
import { withBase, useData } from "vitepress";
const { isDark } = useData();
const props = defineProps({ dark: String, light: String });
</script>
