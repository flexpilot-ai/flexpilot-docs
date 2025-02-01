<template>
  <section
    class="max-w-screen-xl mx-auto px-4 gap-x-20 gap-y-12 justify-between md:px-8 flex flex-col sm:flex-row-reverse align-middle items-center"
  >
    <div
      class="w-full sm:w-5/12 flex flex-col justify-center items-center align-middle space-y-4"
    >
      <div
        class="text-center text-indigo-600 dark:text-indigo-400 font-semibold"
      >
        Anywhere IDE, Anytime Coding
        <span
          class="ml-2 inline-flex items-center rounded-md bg-blue-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-blue-700/10 dark:ring-indigo-400/30 ring-inset"
        >
          Unique
        </span>
      </div>
      <div
        class="text-center text-gray-700 dark:text-gray-100 text-2xl font-semibold sm:text-2xl"
      >
        AI-Powered Coding in Your Browser
      </div>
      <div
        class="text-center font-medium text-sm text-gray-700 dark:text-gray-400"
      >
        Instantly browse GitHub repos and code smarter with built-in AI features
        like codebase chat and inline edits - all in a lightweight, web-based
        IDE.
      </div>
      <div class="relative inline-flex group mt-6">
        <div
          class="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-sm group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        ></div>
        <a
          href="https://ide.flexpilot.ai/?folder=web-fs://github/flexpilot-ai/flexpilot-ide/main"
          target="_blank"
          rel="noopener"
          class="flex relative !bg-white dark:!bg-gray-900 !text-gray-700 dark:!text-gray-300 !border-gray-200 dark:!border-gray-800 hover:!bg-gray-50 hover:dark:!bg-slate-800 flex-row align-middle items-center justify-center gap-x-1 py-2 px-4 font-medium duration-150 border-[1.5px] rounded-lg"
        >
          <svg
            class="size-5"
            alt="Browser logo"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
            />
          </svg>
          Try Instantly Online
        </a>
      </div>
    </div>
    <div
      class="w-full sm:w-7/12 lg:mt-0 flex align-middle justify-center items-center"
    >
      <video
        v-show="isDark"
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/try_online_dark.webm')"
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
          :src="withBase('videos/try_online_light.webm')"
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
