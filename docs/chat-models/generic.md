---
title: OpenAI-Compatible API Setup Guide
description: Learn how to set up and configure OpenAI-compatible model providers like Ollama, Lm Studio, vLLM, Anyscale and more in the Flexpilot IDE.
outline: deep
---

# Configuring OpenAI-Compatible Models

Configure OpenAI-compatible models in Flexpilot IDE using cloud providers like Anyscale Endpoints or self-hosted solutions such as Ollama, Lm Studio, LocalAI, and vLLM. Gather the required details and follow the [setup guide](/docs/configuration/chat.md#setting-up-your-model) to integrate the model.

## Configuration Reference

Use the following settings to configure an OpenAI-compatible API provider in Flexpilot:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-----------------|---------------------------------|----------------------------|
| API URL | Base endpoint URL | `http://localhost:11434/v1` |
| API Key | Your secret key | `ollama` |
| Model ID | Model identifier | `llama-3.3-70b` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Headers | Custom HTTP headers | Leave it blank |
| URL Parameters | Query parameters | Leave it blank |
| Tool Calling | Function calling support | `false` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation.
- The default API URL works for most users; only change it if using a proxy.
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).