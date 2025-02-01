---
title: Chat Model
description: A comprehensive guide to managing chat models configuration and usage in Flexpilot IDE.
outline: deep
---

# Model Configurations ✨

Flexpilot IDE integrates chat models from top AI providers like OpenAI, Azure OpenAI, MistralAI, Google Generative AI, and Groq to provide intelligent support across various locations such as panel chat, inline chat, commit messages and more.

::: tip 🎁 Free Getting Started
NOTE: When you login to flexpilot ide with github account, Github models API and Github copilot models (if you have subscription) are automatically configured and available for use for free.
:::

## Setting Up Your Model

::: info
You can find more details for each of the provider like how to get the API key, model ID, etc in the respective provider's documentation.
:::

To configure chat models in Flexpilot IDE, follow these steps:

1. Open the command palette:

   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`

2. Search for `Flexpilot: Configure the Language Model Provider`
3. You will see a list of chat model providers which are already configured. You can select any of them to edit or add a new one by selecting `Add Chat Model Config`.
4. Once you select `Add Chat Model Config`, You will be provided with a list of chat model providers to choose from.
5. Choose the chat model provider you want to configure and a form will be displayed to enter the configuration details like API Base URL, API Key, Model ID, etc.
6. Fill in the details based on the chat model provider you have selected and save the configuration.
7. Once you save the configuration, the chat model configuration will be tested and if successful, you will be able to use the chat model in your coding environment.

## Chat Context

The Chat Context feature allows you to add relevant context to the chat model, such as the current file content, selected text, and other useful details. This helps the model provide more accurate suggestions based on the context provided.

### Context Variables

Context variables allow you to provide additional context to the chat model. Below are the available context variables:

| Variable               | Description              |
| ---------------------- | ------------------------ |
| `#editor`              | Current file contents    |
| `#selection`           | Selected text            |
| `#file`                | File picker popup        |
| `#sym`                 | Symbol selector          |
| `#terminalLastCommand` | Last terminal command    |
| `#terminalSelection`   | Selected terminal output |

### Copilot Agents

An Agent is a custom tool embedded in Flexpilot Chat to perform specific tasks, enhancing functionality and providing tailored features. To see the available agents, type `@`.

When you type `@`, you will see an option called `Install Chat Extensions`. Click on it to explore and install chat extensions from the marketplace.

For developers, you can create your own agents by referring to the Agent API documentation [here](https://code.visualstudio.com/api/extension-guides/chat).

### Slash Commands

You can use the following slash commands for specific actions:

```
/help     - View usage guide
/clear    - Reset conversation
/settings - Open Model configuration settings
```

## Usage Locations

::: info
By default, the `gpt-4o-mini` model of the GitHub Models API is set as the default chat model for all locations.
:::

Usage locations are where you can use the chat model; some allow model selection via dropdown (e.g., panel/inline chat), while others (e.g., commit message/chat title) use the default model configured for that location.

1. Open the command palette:

   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`

2. Search for `Flexpilot: Set Model Usage Preferences` and select it.
3. you will see a list of usage locations like commit message, chat title, etc ... . Select the location you want to set the default chat model for.
4. Once you select the location, you will be provided with a list of chat models you have configured. Select the chat model you want to set as default for that location.
5. You will also see an option to `Disable model usage` for this location. If you select this option, that particular feature will be disabled.
