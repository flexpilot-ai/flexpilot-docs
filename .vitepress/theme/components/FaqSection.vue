<template>
  <section class="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="space-y-3 text-center">
      <div class="text-2xl text-gray-800 dark:text-gray-200 font-semibold">
        Frequently Asked Questions
      </div>
      <div
        class="text-gray-600 dark:text-gray-400 max-w-lg mx-auto font-medium"
      >
        Answered all frequently asked questions, Still confused? Checkout our
        <a
          class="!underline !underline-offset-2 !cursor-pointer"
          href="/docs/introduction.html"
          >docs</a
        >
        to get started for free.
      </div>
    </div>
    <div class="mt-14 px-4 max-w-4xl mx-auto">
      <div
        class="space-y-3 mt-8 overflow-hidden border-b border-gray-200 dark:border-gray-800"
        v-for="(item, index) in faqs"
        :key="JSON.stringify(item)"
        @click="selectedFaq = selectedFaq === index ? null : index"
      >
        <h2
          class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 dark:text-gray-300 font-medium"
        >
          <span class="font-medium">{{ item.question }}</span>
          <svg
            v-show="selectedFaq === index"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path>
          </svg>
          <svg
            v-show="selectedFaq !== index"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </h2>
        <div
          class="transition-[max-height,opacity] overflow-hidden duration-500 ease-in-out"
          :style="{
            maxHeight: selectedFaq === index ? '1000px' : '0px',
            opacity: selectedFaq === index ? 1 : 0,
          }"
        >
          <p class="text-gray-500 dark:text-gray-400 pb-4">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedFaq = ref<number | null>(null);

const faqs = [
  {
    question:
      "Why is part of Flexpilot IDE licensed under GNU GPLv3 instead of fully MIT?",
    answer:
      "To ensure modifications remain free and open, part of Flexpilot IDE is under GNU GPLv3. The extension uses GPLv3, while the IDE retains an MIT license. This balance supports fairness and collaboration, aligning with our goals.",
  },
  {
    question: "Is Flexpilot IDE entirely free to use?",
    answer:
      "Flexpilot IDE is free to use, but to access the AI features, you will need to bring your own LLM API keys. Providers like GitHub Models API, Google Gemini API, and others offer generous free tiers that you can take advantage of.",
  },
  {
    question: "Why does Flexpilot IDE resemble VS Code with GitHub Copilot?",
    answer:
      "Flexpilot IDE is a fork of Code - OSS (MIT licensed), the base of VS Code. Its AI features use the same APIs as GitHub Copilot, resulting in a similar look and feel.",
  },
  {
    question: "Can I use locally deployed models with Flexpilot IDE?",
    answer:
      "Yes, Flexpilot supports OpenAI-compatible offline models like Ollama and LMStudio. Refer to our documentation for detailed setup instructions.",
  },
  {
    question:
      "How does Flexpilot IDE stand out from competitors like Cursor or PearAI?",
    answer:
      "Flexpilot IDE is open-source, privacy-focused, and offers a similar experience to VS Code with support for GitHub Copilot extensions. For a detailed comparison against each of the top competitors, click here.",
  },
];
</script>
