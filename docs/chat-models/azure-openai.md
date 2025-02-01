---
title: Azure OpenAI Setup Guide
description: Learn how to set up and configure Azure OpenAI models in Flexpilot IDE
outline: deep
---

# Configuring Azure OpenAI Models

This page explains how to retrieve or generate API credentials for Azure OpenAI models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: info 🔗 Quick Links
- [Azure Portal](https://portal.azure.com) - Manage your Azure account
- [Azure OpenAI Documentation](https://learn.microsoft.com/azure/cognitive-services/openai) - Official documentation
- [Azure OpenAI Studio](https://oai.azure.com) - Manage deployments
- [Available Models](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/models) - Compare Azure OpenAI model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit API keys to version control or share them publicly. Keep them secure!
:::

1. Login to [Azure Portal](https://portal.azure.com) or sign up for a new account if you don't have one.
2. Request access to Azure OpenAI service if you haven't already.
3. Create an Azure OpenAI resource in your desired region.
4. Deploy your chosen model through Azure OpenAI Studio.
5. Retrieve the API key and endpoint from the resource's "Keys and Endpoint" section.

## Configuration Reference

Use these settings when configuring Azure OpenAI in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| API Base URL | Base endpoint URL | `https://{resourceName}.openai.azure.com/openai/deployments/{deploymentId}` |
| API Key | Your secret key | From Azure Portal |
| Model ID | Deployment identifier | Your deployment name |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- Make sure to replace {resourceName} and {deploymentId} in the API URL with your actual values
- Create separate deployments for different model versions if needed
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).