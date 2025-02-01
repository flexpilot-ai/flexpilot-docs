---
title: Configuring Anthropic Models
description: Learn how to set up and configure Anthropic's Claude AI models in Flexpilot IDE
outline: deep
---

# Configuring Anthropic Models

This page explains how to retrieve or generate API credentials for Anthropic's Claude models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: info 📚 Quick Links
- [Anthropic Console](https://console.anthropic.com/) - Manage your Anthropic account
- [API Documentation](https://docs.anthropic.com/) - Official API reference
- [API Keys](https://console.anthropic.com/settings/keys) - Generate API credentials
- [Available Models](https://docs.anthropic.com/en/docs/about-claude/models) - Compare Claude model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to Anthropic [Console](https://console.anthropic.com/) or sign up for a new account if you don't have one.
2. Navigate to Anthropic Console API Keys [Section](https://console.anthropic.com/settings/keys) to create a new API key.
3. Once you create the API key, copy it immediately as it won't be visible again.
4. Navigate to Anthropic Model [Docs](https://docs.anthropic.com/en/docs/about-claude/models) Section to get the correct model name for the API calls.

## Configuration Reference

Use these settings when configuring Anthropic in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API URL | Base endpoint URL | `https://api.anthropic.com/v1` |
| API Key | Your secret key | From [API Keys](https://console.anthropic.com/settings/keys) |
| Model ID | Model identifier | `claude-3-5-sonnet-latest` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- The default API URL works for most users - only change if using a proxy
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).