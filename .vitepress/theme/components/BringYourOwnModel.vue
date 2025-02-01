<template>
  <section
    class="max-w-screen-xl mx-auto px-4 md:px-8 gap-x-20 justify-between flex flex-col sm:flex-row align-middle items-center"
  >
    <div
      class="w-full sm:w-5/12 flex flex-col justify-center items-center sm:items-start align-middle space-y-2"
    >
      <div class="text-indigo-600 dark:text-indigo-400 font-semibold">
        Bring your Own Model (BYOM)
      </div>
      <div
        class="text-gray-700 dark:text-gray-100 text-2xl font-semibold sm:text-2xl"
      >
        Choose. Customize. Conquer.
      </div>
      <div
        class="font-medium text-sm text-center sm:text-start text-gray-700 dark:text-gray-400"
      >
        Bring models from your favorite LLM providers that fits your needs -
        cost, accuracy, privacy, and more!
      </div>
      <div class="space-y-8 mt-8 max-w-lg lg:max-w-none">
        <div class="flex gap-x-4">
          <div
            class="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100 rounded-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              Select Provider
            </div>
            <div class="mt-1 text-gray-500 dark:text-gray-400 font-medium">
              Select your preferred LLM provider from our list of top major
              provider options.
            </div>
          </div>
        </div>

        <div class="flex gap-x-4">
          <div
            class="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100 rounded-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              Add Configuration
            </div>
            <div class="mt-1 text-gray-500 dark:text-gray-400 font-medium">
              Add your API key, secret, and other configurations to connect with
              your LLM provider.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-12 w-full sm:w-7/12 lg:mt-0 flex align-middle justify-center items-center"
    >
      <video
        v-if="isDark"
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/model_addition_dark.webm')"
          type="video/webm"
        />
      </video>
      <video
        v-else
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/model_addition_light.webm')"
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
