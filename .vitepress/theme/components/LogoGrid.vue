<template>
  <section class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="font-semibold text-gray-600 dark:text-gray-300 text-center">
      Supporting top LLM providers and Many More
    </div>
    <div class="mt-12">
      <ul
        class="flex gap-y-12 flex-wrap items-end align-bottom justify-center [&>*]:px-6"
      >
        <li class="flex-none">
          <OpenAI class="h-8 w-fit mb-1 fill-black dark:fill-gray-300" />
        </li>
        <li class="flex-none">
          <Mistral class="h-8 w-fit mb-1 fill-black dark:fill-gray-400" />
        </li>

        <li class="flex-none">
          <Azure class="h-8 w-fit mb-1" />
        </li>

        <li class="flex-none">
          <Bedrock class="h-8 w-fit fill-black dark:fill-gray-300" />
        </li>

        <li class="flex-none">
          <Gemini class="h-8 w-fit mb-1" />
        </li>

        <li class="flex-none">
          <Claude class="h-7 w-fit mb-0.5 fill-black dark:fill-gray-300" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import OpenAI from "../logos/OpenAI.vue";
import Mistral from "../logos/Mistral.vue";
import Claude from "../logos/Claude.vue";
import Gemini from "../logos/Gemini.vue";
import Azure from "../logos/Azure.vue";
import Bedrock from "../logos/Bedrock.vue";
</script>
