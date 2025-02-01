---
title: Mistral AI Setup Guide
description: Learn how to set up and configure Codestral model for completions when you type in Flexpilot IDE
outline: deep
---

# Configuring Codestral Models

This guide will help you set up and configure Mistral AI models in Flexpilot IDE for enhanced code completions. Follow our detailed [configuration guide](/docs/configuration/completions.md#setting-up-your-model) after obtaining your API credentials.

::: tip 💝 Free Developer Access
Codestral models are available for free to developers. Sign up on the [Mistral AI Console](https://console.mistral.ai) to get started.
:::

::: info 🔗 Essential Links
- [Mistral AI Dashboard](https://console.mistral.ai/codestral) - Access your developer console
:::

## Setup Guide

::: warning 🔒 Security Warning
Keep your API keys confidential! Never commit them to version control or share in public repositories.
:::

1. Access the [Mistral AI Console](https://console.mistral.ai) and authenticate/register
2. Head to the [Codestral Dashboard](https://console.mistral.ai/codestral) to retrieve your API key

## Configuration Reference

Fine-tune these parameters in Flexpilot IDE for optimal performance:

::: details ⚙️ Configuration Reference {open}
| Parameter | Purpose | Recommended Value |
|-----------|---------|------------------|
| API Base URL | Primary endpoint | `https://codestral.mistral.ai/v1/fim` |
| API Key | Authentication token | Generated from [Setup Guide](#setup-guide) |
| Model ID | AI model selection | `codestral-latest` |
| Max Output Tokens | Response length limit | `500` |
| Max Input Tokens | Context window size | `4000` |
| Temperature | Creativity control (0-1) | `0.2` for precise code generation |
| Debounce Wait | Completion trigger delay | `200` milliseconds |
:::

::: tip 💡 Optimization Tips
- Maintain temperature between 0.1-0.3 for reliable code suggestions
- For snappier completions, consider reducing `Debounce Wait` to 100ms
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable AI-powered code completions. For detailed guidance, refer to the [Setup Guide](/docs/configuration/completions.md#setting-up-your-model).