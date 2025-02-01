---
title: OpenAI Setup Guide
description: Learn how to set up and configure OpenAI models in Flexpilot IDE
outline: deep
---

# Configuring OpenAI Models

This page explains how to retrieve or generate API credentials for OpenAI models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: info 🔗 Quick Links
- [OpenAI Platform](https://platform.openai.com) - Manage your OpenAI account
- [API Documentation](https://platform.openai.com/docs) - Official API reference
- [API Keys](https://platform.openai.com/settings/organization/api-keys) - Generate API credentials
- [Available Models](https://platform.openai.com/docs/models) - Compare OpenAI model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to OpenAI [Platform](https://platform.openai.com) or sign up for a new account if you don't have one.
2. Navigate to OpenAI Platform [API Keys](https://platform.openai.com/settings/organization/api-keys) section to create a new API key.
3. Click `Create new secret key` and give it a descriptive name (recommended).
4. Once you create the API key, copy it immediately as it won't be visible again.
5. Visit the OpenAI [Models](https://platform.openai.com/docs/models) documentation to select the appropriate model for your needs.

## Configuration Reference

Use these settings when configuring OpenAI in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://api.openai.com/v1` |
| API Key | Your secret key | From [API Keys](https://platform.openai.com/settings/organization/api-keys) |
| Model ID | Model identifier | `gpt-4-turbo-preview` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Organization ID | OpenAI org identifier (optional) | From organization settings |
| Project ID | Project identifier (optional) | From project settings |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).