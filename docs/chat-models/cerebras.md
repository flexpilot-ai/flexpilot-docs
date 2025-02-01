---
title: Cerebras Setup Guide
description: Learn how to set up and configure Cerebras models in Flexpilot IDE
outline: deep
---

# Configuring Cerebras Models

This page explains how to retrieve or generate API credentials for Cerebras models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: tip 🎁 Free Getting Started
Cerebras offers a generous free tier for developers to get started with their models. You can start using them without any payment required.
:::

::: info 🔗 Quick Links
- [Cerebras Platform](https://cloud.cerebras.ai) - Manage your Cerebras account
- [API Documentation](https://inference-docs.cerebras.ai) - Official API reference
- [Available Models](https://inference-docs.cerebras.ai/introduction) - Compare Cerebras model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to Cerebras [Platform](https://cloud.cerebras.ai) or sign up for a new account if you don't have one.
2. Navigate to `API Keys` section to create a new API key.
3. Click `Generate API Key` and give it a descriptive name (recommended).
4. Once you create the API key, copy it immediately as it won't be visible again.
5. Visit the Cerebras [Models](https://inference-docs.cerebras.ai/introduction) documentation to select the appropriate model for your needs.

## Configuration Reference

Use these settings when configuring Cerebras in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://api.cerebras.ai/v1` |
| API Key | Your secret key | From [Setup Guide](#setup-guide) |
| Model ID | Model identifier | `llama-3.3-70b` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Headers | Custom HTTP headers | Leave it blank |
| URL Parameters | Query parameters | Leave it blank |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).