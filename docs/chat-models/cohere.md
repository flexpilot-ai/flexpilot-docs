---
title: Cohere Setup Guide
description: Learn how to set up and configure Cohere models in Flexpilot IDE
outline: deep
---

# Configuring Cohere Models

This page explains how to retrieve or generate API credentials for Cohere models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: tip 🎁 Free Getting Started
Cohere offers a generous free tier for developers to get started with their models. You can start using them without any payment required.
:::

::: info 🚀 Quick Links
- [Cohere Dashboard](https://dashboard.cohere.com) - Manage your Cohere account
- [API Documentation](https://docs.cohere.com) - Official API reference
- [API Keys](https://dashboard.cohere.com/api-keys) - Generate API credentials
- [Available Models](https://docs.cohere.com/docs/models) - Compare Cohere model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to Cohere [Dashboard](https://dashboard.cohere.com) or sign up for a new account if you don't have one.
2. Navigate to Cohere Dashboard [API Keys](https://dashboard.cohere.com/api-keys) section to create a new API key.
3. Click `+ New Trial key` and give it a descriptive name (recommended).
4. Once you create the API key, copy it immediately as it won't be visible again.
5. Visit the Cohere [Models](https://docs.cohere.com/docs/models) documentation to select the appropriate model for your needs.

## Configuration Reference

Use these settings when configuring Cohere in Flexpilot IDE:

::: details ⚙️ Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://api.cohere.com/v2` |
| API Key | Your secret key | From [API Keys](https://dashboard.cohere.com/api-keys) |
| Model ID | Model identifier | `command` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Best Practices
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).