---
title: 🛠️ Flexpilot IDE Settings
description: Learn how to customize your Flexpilot IDE development environment through configurable settings
outline: deep
---

# ⚙️ Settings

Flexpilot IDE offers extensive customization options to tailor your development environment. This guide will help you configure various settings for the editor, terminal, and extensions to create your ideal workspace.

## Accessing Settings

Getting to your IDE settings is quick and easy:

::: tip Quick Access
1. Launch Command Palette:
   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`
2. Type `Preferences: Open Settings (UI)`
3. Click to open the settings interface
:::

The settings window provides an organized view with:
- Categories list on the left
- Detailed settings on the right

## Token Usage Settings

Flexpilot IDE allows you to monitor token usage across different features. Here's how to configure visibility for each component:

::: info
Enabling this helps track resource usage while editing code and documents.
:::

::: warning
Monitor this setting to avoid unexpected token usage in panel discussions.
:::

### Editing Session

Monitor token consumption during your editing sessions:

```json
"flexpilot.editingSession.showTokenUsage": true
```

### Inline Chat

Keep track of tokens used in inline conversations:

```json
"flexpilot.inlineChat.showTokenUsage": true
```

### Panel Chat

Configure token visibility in the panel chat interface:

```json
"flexpilot.panelChat.showTokenUsage": true
```

### Terminal Chat

Track tokens used in terminal-based interactions:

```json
"flexpilot.terminal.showTokenUsage": true
```