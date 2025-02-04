---
title: OpenAI-Compatible API Setup Guide
description: Learn how to set up and configure OpenAI-compatible model providers like Ollama, Lm Studio, vLLM, Anyscale and more for completions when you type in Flexpilot IDE
outline: deep
---

# Configuring OpenAI-Compatible Models

Configure OpenAI-compatible `Fill In the Middle` models in Flexpilot IDE using cloud providers like OpenAI or self-hosted solutions such as Ollama, Lm Studio, LocalAI, and vLLM. Gather the required details and follow the [setup guide](/docs/configuration/completions.md#setting-up-your-model) to configure the model.

## Configuration Reference

Use the following settings to configure an OpenAI-compatible API provider in Flexpilot:

::: details ⚙️ Configuration Reference {open}
| Parameter | Purpose | Sample Value |
|-----------|---------|------------------|
| API Base URL | Primary endpoint | `https://codestral.mistral.ai/v1/fim` |
| API Key | Authentication token | Generated from [Setup Guide](#setup-guide) |
| Model ID | AI model selection | `codegemma:2b` |
| Max Output Tokens | Response length limit | `500` |
| Max Input Tokens | Context window size | `3000` |
| Temperature | Creativity control (0-1) | `0.2` for precise code generation |
| Debounce Wait | Completion trigger delay | `200` milliseconds |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation.
- For snappier completions, consider reducing `Debounce Wait` to 100ms.
:::

## Available Providers

Below is a list of some popular OpenAI-compatible API providers and services that you can use with Flexpilot, with the help of OpenAI Compatible Completion Model Provider.

> [!NOTE]
> The following list is not exhaustive and may not include all available providers. Please refer to the provider's documentation for more details.

- DeepSeek API
- Ollama
- Hugging Face
- Replicate
- Together AI
- Fireworks AI

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable AI-powered code completions. For detailed guidance, refer to the [Setup Guide](/docs/configuration/completions.md#setting-up-your-model).