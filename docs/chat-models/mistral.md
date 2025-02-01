---
title: Mistral AI Setup Guide
description: Learn how to set up and configure Mistral AI models in Flexpilot IDE
outline: deep
---

# Configuring Mistral AI Models

This guide walks you through setting up Mistral AI models in Flexpilot IDE. After getting your API credentials, you can configure the model following our [configuration guide](/docs/configuration/chat.md#setting-up-your-model).

::: tip 🎁 Free Getting Started
Mistral AI offers a generous free tier for developers to get started with their models. Choose `codestral` endpoint for free access for both `chat` and `completions` tasks.
:::

::: info 🚀 Quick Links
- [Mistral AI Console](https://console.mistral.ai) - Manage your account
- [API Documentation](https://docs.mistral.ai) - Official API reference
- [API Keys](https://console.mistral.ai/api-keys) - Generate API credentials
- [Model Overview](https://docs.mistral.ai/getting-started/models/models_overview) - Compare model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Protect your API keys! Never expose them in code repositories or public spaces.
:::

1. Visit [Mistral AI Console](https://console.mistral.ai) and sign in/create account
2. Choose your preferred endpoint:

::: tip
Codestral endpoint is recommended for programming tasks, but it support only `codestral-latest` model.
:::

::: details Codestral Endpoint {open}
- Navigate to [Codestral Section](https://console.mistral.ai/codestral)
- Copy the displayed API key
:::

::: details Standard Endpoint {open}
- Go to [API Keys](https://console.mistral.ai/api-keys)
- Click "Create new key"
- Set a name and expiry
- Save the key immediately (it won't be shown again)
:::

3. Review [model documentation](https://docs.mistral.ai/getting-started/models/models_overview) to select your model

## Configuration Reference

Configure these parameters in Flexpilot IDE:

::: details 🔧 Configuration Reference {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://codestral.mistral.ai/v1` |
| API Key | Your secret key | From setup process above |
| Model ID | Model identifier | `codestral-latest` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 🎯 Best Practices
- Set temperature between 0.1-0.3 for consistent code generation
- Use the Codestral endpoint for programming tasks
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).