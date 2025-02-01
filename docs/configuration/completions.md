---
title: Configuring Code Completions 🤖
description: Learn how to configure and customize code completions in Flexpilot IDE to enhance your coding workflow for suggestions while you type.
outline: deep
---

# Code Completions ✨

Supercharge your coding workflow with Flexpilot's AI-powered code completions. This guide covers everything you need to know about configuring and customizing the completion models to enable code suggestion while you type.

::: tip 🎁 Free Getting Started
Get started instantly with Codestral's generous free tier! Their `codestral-latest` model provides high-quality completions without any payment required.
:::

## Setting Up Your Model

Flexpilot supports multiple AI providers that are compatible with the OpenAI API format, including OpenAI Instruct Models, Mistral AI (Codestral), Ollama, and other OpenAI-compatible providers. To configure your preferred provider, follow these steps:

1. Open the command palette:

   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`

2. Search for `Flexpilot: Configure the Language Model Provider`

3. Select `Edit Completions Config`

::: details 📝 Configuration Fields Explained {open}
| Field | Description | Recommended Value |
|-------|-------------|-------------------|
| API Base URL | Provider's API endpoint | `https://api.openai.com/v1` or `https://codestral.mistral.ai/v1/fim` |
| API Key | Your authentication key | Obtain from provider |
| Model ID | Specific model identifier | `gpt-3.5-turbo-instruct` or `codestral-latest` |
| Max Output Tokens | Maximum generated tokens | 500 |
| Max Input Tokens | Maximum context window | 4000 (model context - output tokens) |
| Temperature | Output randomness (0-1) | 0.2 |
| Debounce Wait | Delay before completion (ms) | 200-500 |
:::

::: warning ⚠️ Important
Keep your API keys secure and never commit them to version control!
:::

## Managing Completions

### Status Indicator

The Flexpilot logo in the bottom-right corner shows the current completion status:

- 🔄 Spinning: Fetching completions
- ⚡ Normal: Ready for next completion

### Enable / Disable

To control code completions, click the Flexpilot icon in the bottom-right corner of the editor. This opens the Quick Controls menu, where you can toggle completions globally or for specific languages.

::: info Quick Controls
- **Global Toggle**: Enable/disable completions across all workspaces
- **Language Settings**: Toggle completions for the current file type
:::

::: tip
You can quickly disable completions for specific languages while keeping them enabled globally. This is useful when you want to temporarily turn off suggestions for certain file types.
:::
