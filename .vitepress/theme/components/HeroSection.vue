<template>
  <section class="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8">
    <div class="space-y-5 max-w-4xl mx-auto text-center">
      <div class="flex w-full justify-center align-middle items-center">
        <span
          class="inline-flex items-center rounded-md bg-blue-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-blue-700/10 dark:ring-indigo-400/30 ring-inset"
        >
          Introducing Flexpilot IDE
        </span>
      </div>
      <div
        class="text-3xl dark:text-gray-300 text-gray-800 font-bold mx-auto max-w-screen-sm md:text-4xl"
      >
        Redefine Coding:
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"
        >
          Your IDE, Your LLM, Your Rules
        </span>
      </div>
      <div
        class="max-w-2xl text-md mx-auto font-medium dark:text-gray-300 text-gray-800"
      >
        An open-source, free, AI-native, privacy-first IDE, forked from VS Code,
        offering the flexibility to bring your own keys for the LLMs of your
        choice.
      </div>
      <div
        class="items-center mt-8 cursor-pointer justify-center gap-x-8 space-y-3 sm:flex sm:space-y-0"
      >
        <div class="w-full sm:w-fit relative inline-flex group">
          <div
            class="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-sm group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
          ></div>
          <a
            href="https://ide.flexpilot.ai/?folder=web-fs://github/flexpilot-ai/flexpilot-ide/main"
            target="_blank"
            rel="noopener"
            class="w-full sm:w-fit flex relative !bg-white dark:!bg-gray-900 !text-gray-700 dark:!text-gray-300 !border-gray-200 dark:!border-gray-800 hover:!bg-gray-50 hover:dark:!bg-slate-800 flex-row align-middle items-center justify-center gap-x-1 py-2 px-4 font-medium duration-150 border-[1.5px] rounded-lg"
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

        <a
          href="https://flexpilot.ai/docs/getting-started.html#downloading-the-ide"
          target="_blank"
          rel="noopener"
          class="w-full sm:w-fit flex !bg-white dark:!bg-gray-900 !text-gray-700 dark:!text-gray-300 !border-gray-200 dark:!border-gray-800 hover:!bg-gray-50 hover:dark:!bg-slate-800 flex-row align-middle items-center justify-center gap-x-1 py-2 px-4 font-medium duration-150 border-[1.5px] rounded-lg"
        >
          <svg
            class="size-5"
            alt="Download Desktop Edition"
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
              stroke-width="2"
              d="M12 11.5V20m0 0l3-3m-3 3l-3-3M8 7.036a3.5 3.5 0 0 1 1.975.99M17.5 14c1.519 0 2.5-1.231 2.5-2.75a2.75 2.75 0 0 0-2.016-2.65A5 5 0 0 0 8.37 7.108a3.5 3.5 0 0 0-1.87 6.746"
            />
          </svg>
          Download Desktop Edition
        </a>
      </div>
    </div>

    <div class="mt-14">
      <video
        v-show="isDark"
        autoplay
        muted
        loop
        playsinline
        class="w-full shadow-lg rounded-lg border-2 border-gray-100 dark:border-gray-800"
      >
        <source
          :src="withBase('videos/hero_section_dark.webm')"
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
          :src="withBase('videos/hero_section_light.webm')"
          type="video/webm"
        />
      </video>
    </div>
  </section>
</template>

<script setup>
import { withBase, useData } from "vitepress";
const { isDark } = useData();
</script>
