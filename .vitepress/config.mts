import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flexpilot IDE - Open-Source AI Native IDE",
  lastUpdated: true,
  appearance: true,
  sitemap: {
    hostname: "https://flexpilot.ai",
  },
  vite: {
    plugins: tailwindcss(),
  },
  description:
    "An open-source, free, AI-native, privacy-first IDE, forked from VS Code, offering the flexibility to bring your own keys for the LLMs of your choice.",
  head: [
    [
      "meta",
      {
        property: "title",
        content: "Flexpilot IDE - Open-Source AI Native IDE",
      },
    ],
    [
      "meta",
      {
        property: "description",
        content:
          "An open-source, free, AI-native, privacy-first IDE, forked from VS Code, offering the flexibility to bring your own keys for the LLMs of your choice.",
      },
    ],
    [
      "meta",
      {
        property: "keywords",
        content:
          "Visual Studio Code, AI Coding Assistant, Open Source, GitHub Copilot Alternative, Cursor Alternative, Free Coding Assistant",
      },
    ],
    ["meta", { property: "http-equiv", content: "Content-Type" }],
    ["meta", { property: "language", content: "English" }],
    ["meta", { property: "revisit-after", content: "1 days" }],
    ["meta", { property: "author", content: "flexpilot.ai" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://flexpilot.ai/" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Flexpilot IDE - Open-Source AI Native IDE",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "An open-source, free, AI-native, privacy-first IDE, forked from VS Code, offering the flexibility to bring your own keys for the LLMs of your choice.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://flexpilot.ai/flexpilot-logo.png",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { property: "twitter:url", content: "https://flexpilot.ai/" },
    ],
    [
      "meta",
      {
        property: "twitter:title",
        content: "Flexpilot IDE - Open-Source AI Native IDE",
      },
    ],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          "An open-source, free, AI-native, privacy-first IDE, forked from VS Code, offering the flexibility to bring your own keys for the LLMs of your choice.",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://flexpilot.ai/flexpilot-logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-title",
        content: "Flexpilot IDE",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  ],
  themeConfig: {
    search: {
        provider: 'algolia',
        options: {
          appId: 'NZP20C20EL',
          apiKey: '258fc660cfba40209e4bf782f912e762',
          indexName: 'flexpilot'
        }
    },
    siteTitle: false,
    nav: [
      { link: "/", text: "Home" },
      { link: "/docs/getting-started", text: "Get Started" },
      { link: "/docs/introduction", text: "Features" },
      { link: "https://discord.gg/7vp859ja", text: "Discord" },
    ],
    logo: {
      dark: "/logos/logo-dark.svg",
      light: "/logos/logo-light.svg",
      alt: "Flexpilot AI Logo",
    },
    sidebar: {
      "/": [
        { text: "Introduction", link: "/docs/introduction" },
        { text: "Getting Started", link: "/docs/getting-started" },
        {
          text: "Configuration",
          items: [
            { text: "Chat", link: "/docs/configuration/chat" },
            { text: "Completion", link: "/docs/configuration/completions" },
          ],
        },
        {
          text: "Completion Models",
          items: [
            { text: "Codestral", link: "/docs/completion-models/codestral" },
            { text: "OpenAI Compatible", link: "/docs/completion-models/generic" },
          ],
        },
        {
          text: "Chat Models",
          items: [
            { text: "Anthropic", link: "/docs/chat-models/anthropic" },
            { text: "AWS Bedrock", link: "/docs/chat-models/bedrock" },
            { text: "Azure OpenAI", link: "/docs/chat-models/azure-openai" },
            { text: "Cerebras", link: "/docs/chat-models/cerebras" },
            { text: "Cohere", link: "/docs/chat-models/cohere" },
            { text: "Google Gemini", link: "/docs/chat-models/google-gemini" },
            { text: "Groq", link: "/docs/chat-models/groq" },
            { text: "Mistral AI", link: "/docs/chat-models/mistral" },
            { text: "OpenAI", link: "/docs/chat-models/openai" },
            { text: "OpenAI Compatible", link: "/docs/chat-models/generic" },
          ],
        },
        { text: "IDE Settings", link: "/docs/ide-settings" },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/flexpilot-ai/flexpilot-ide" }],
  },
});
