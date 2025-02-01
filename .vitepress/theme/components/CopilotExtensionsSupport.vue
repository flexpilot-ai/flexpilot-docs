<template>
  <section
    class="max-w-screen-xl mx-auto px-4 gap-y-12 justify-between md:px-8 flex flex-col align-middle items-center"
  >
    <div
      class="w-full flex flex-col justify-center items-center align-middle space-y-2"
    >
      <div class="text-indigo-600 dark:text-indigo-400 font-semibold">
        Designed to Grow
        <span
          class="ml-2 inline-flex items-center rounded-md bg-blue-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-blue-700/10 dark:ring-indigo-400/30 ring-inset"
        >
          Unique
        </span>
      </div>

      <div
        class="text-center text-gray-700 dark:text-gray-100 text-2xl font-semibold sm:text-2xl"
      >
        GitHub Copilot Extensions Support
      </div>
      <div
        class="font-medium text-center mt-2 text-gray-700 dark:text-gray-400 max-w-3xl mx-auto"
      >
        Flexpilot IDE is compatible with existing GitHub Copilot extensions,
        allowing you to enhance AI capabilities by seamlessly installing
        ready-to-use extensions from marketplace.
      </div>

      <a
        target="_blank"
        href="https://marketplace.visualstudio.com/search?term=tag%3Achat-participant&target=VSCode"
        class="!text-indigo-600 dark:!text-indigo-400 text-sm font-semibold mt-4"
      >
        Go to Marketplace ->
      </a>
    </div>
    <div class="mx-auto">
      <video
        v-show="isDark"
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/github_extensions_dark.webm')"
          type="video/webm"
        />
      </video>
      <video
        v-show="!isDark"
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/github_extensions_light.webm')"
          type="video/webm"
        />
      </video>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withBase, useData } from "vitepress";
const { isDark } = useData();
</script>
