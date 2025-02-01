---
title: Groq Cloud Setup Guide
description: Learn how to set up and configure Groq Cloud models in Flexpilot IDE
outline: deep
---

# Configuring Groq Cloud Models

This page explains how to retrieve or generate API credentials for Groq Cloud models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: tip 🎁 Free Getting Started
Groq Cloud offers a generous free tier for developers to get started with their models. You can start using them without any payment required.
:::

::: info 🔗 Quick Links
- [Groq Cloud Console](https://console.groq.com) - Manage your Groq account
- [API Documentation](https://console.groq.com/docs) - Official API reference
- [API Keys](https://console.groq.com/keys) - Generate API credentials
- [Available Models](https://console.groq.com/docs/models) - Compare Groq model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to Groq Cloud [Console](https://console.groq.com) or sign up for a new account if you don't have one.
2. Navigate to Groq Cloud Console [API Keys](https://console.groq.com/keys) section to create a new API key.
3. Click `Create API Key` and give it a descriptive name (recommended).
4. Once you create the API key, copy it immediately as it won't be visible again.
5. Visit the Groq Cloud [Models](https://console.groq.com/docs/models) documentation to select the appropriate model for your needs.

## Configuration Reference

Use these settings when configuring Groq Cloud in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://api.groq.com/openai/v1` |
| API Key | Your secret key | From [API Keys](https://console.groq.com/keys) |
| Model ID | Model identifier | `llama-3.3-70b-versatile` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).