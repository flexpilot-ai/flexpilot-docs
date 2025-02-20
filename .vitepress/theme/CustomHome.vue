<script setup>
import HeroSection from "./components/HeroSection.vue";
import Features from "./components/Features.vue";
import BringYourOwnModel from "./components/BringYourOwnModel.vue";
import CopilotExtensionsSupport from "./components/CopilotExtensionsSupport.vue";
import FaqSection from "./components/FaqSection.vue";
import FooterSection from "./components/FooterSection.vue";
import TryInstantlyOnline from "./components/TryInstantlyOnline.vue";
import LogoGrid from "./components/LogoGrid.vue";
import GitHubLinkSupport from "./components/GitHubLinkSupport.vue";
</script>

<template>
  <div class="py-24 flex flex-col min-w-full min-h-full gap-y-36">
    <HeroSection />
    <LogoGrid />
    <Features />
    <BringYourOwnModel />
    <CopilotExtensionsSupport />
    <TryInstantlyOnline />
    <GitHubLinkSupport />
    <FaqSection />
    <FooterSection />
  </div>
</template>
