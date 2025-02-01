---
title: Gemini Setup Guide
description: Learn how to set up and configure Gemini models in Flexpilot IDE
outline: deep
---

# Configuring Gemini Models

This page explains how to retrieve or generate API credentials for Gemini models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: tip 🎁 Free Getting Started
Google's Gemini models are available for free on the Google AI Studio platform. You can start using them without any payment required.
:::

::: info 🚀 Quick Links
- [Google AI Studio](https://aistudio.google.com) - Manage your Gemini account
- [API Documentation](https://ai.google.dev/gemini-api/docs) - Official API reference
- [API Keys](https://aistudio.google.com/apikey) - Generate API credentials
- [Available Models](https://ai.google.dev/gemini-api/docs/models/gemini) - Compare Gemini model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to Google AI [Studio](https://aistudio.google.com) or sign up for a new account if you don't have one.
2. Navigate to Google AI Studio [API Keys](https://aistudio.google.com/apikey) section to create a new API key.
3. Click `Create API Key` and select or create a new Google Cloud Project.
4. Once you create the API key, copy it immediately as it won't be visible again.
5. Visit the Gemini [Models](https://ai.google.dev/gemini-api/docs/models/gemini) documentation to select the appropriate model for your needs.

## Configuration Reference

Use these settings when configuring Gemini in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://generativelanguage.googleapis.com/v1beta` |
| API Key | Your secret key | From [API Keys](https://aistudio.google.com/apikey) |
| Model ID | Model identifier | `models/gemini-1.5-pro` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).