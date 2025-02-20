---
title: Installing Flexpilot IDE
description: Step-by-step guide to install Flexpilot IDE across Windows, macOS and Linux
outline: deep
---

# Installation

Welcome to the Flexpilot IDE installation guide! This guide will help you get Flexpilot IDE up and running on your system. 🚀

## System Requirements

Before installing, ensure your system meets these requirements:

::: tip Supported Platforms
- **Windows**
  - Windows 10 or 11
  - 64-bit (x64) or ARM64 processors
- **macOS**
  - macOS 10.15 Catalina or newer
  - Intel or Apple Silicon processors
- **Linux**
  - Debian/Ubuntu or RHEL/Fedora based distributions
  - 64-bit (x64) or ARM64 processors
:::

## Downloading the IDE

::: warning Try It Instantly! 
🚀 No installation needed - start using Flexpilot IDE right now in your browser!

Click [here](https://ide.flexpilot.ai/?folder=web-fs://github/flexpilot-ai/flexpilot-ide/main) to try the IDE instantly online before installing it.
:::

Select your platform below to find the right download:

::: details Windows Installation Files {open}
| Architecture | Download Link | Notes |
|-------------|---------------|-------|
| 💠 x64 (user) | [Download .exe](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/windows-x64-user.exe) | Most common for modern PCs for normal users |
| 💠 ARM64 (user) | [Download .exe](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/windows-arm64-user.exe) | ARM-based devices for normal users |
| 💠 x64 (system) | [Download .exe](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/windows-x64-system.exe) | Most common for modern PCs for Administrators |
| 💠 ARM64 (system) | [Download .exe](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/windows-arm64-system.exe) | ARM-based devices for Administrators |
:::

::: details Linux Installation Files {open}
| Distribution | Architecture | Download Link |
|-------------|--------------|---------------|
| 🐧 Debian/Ubuntu | x64 | [Download .deb](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/linux-x64.deb) |
| 🐧 Debian/Ubuntu | ARM64 | [Download .deb](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/linux-arm64.deb) |
| 🐧 RHEL/Fedora | x64 | [Download .rpm](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/linux-x64.rpm) |
| 🐧 RHEL/Fedora | ARM64 | [Download .rpm](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/linux-arm64.rpm) |
:::

::: details macOS Installation Files {open}
| Architecture | Download Link | Notes |
|-------------|---------------|-------|
| 🍎 Apple Silicon | [Download .zip](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/macos-arm64-app.zip) | For M1/M2/M3 Macs |
| 🍎 Intel | [Download .zip](https://github.com/flexpilot-ai/flexpilot-ide/releases/latest/download/macos-x64-app.zip) | For Intel-based Macs |
:::

## Installation Steps

### Windows Setup

::: tip Finding Your Windows Architecture
1. Press `Windows + I` to open Settings
2. Navigate to System → About
3. Under "Device specifications", check "System type":

   - "64-bit operating system, x64-based" → Download x64 version
   - "64-bit operating system, ARM-based" → Download ARM64 version
 :::

4. Download the appropriate `.exe` installer
5. Run the installer with administrator privileges
6. Follow the installation wizard prompts
7. Launch Flexpilot IDE from Start menu or desktop shortcut

### Linux Setup

For Debian/Ubuntu systems:

```bash
# Install on x64 systems
sudo dpkg -i linux-x64.deb
sudo apt-get install -f

# Install on ARM64 systems
sudo dpkg -i linux-arm64.deb
sudo apt-get install -f
```

For RHEL/Fedora systems:

```bash
# Install on x64 systems
sudo dnf install linux-x64.rpm

# Install on ARM64 systems
sudo dnf install linux-arm64.rpm
```

### macOS Setup

::: tip Finding Your Mac Architecture
1. Click the Apple menu (🍎) in top-left corner
2. Select "About This Mac"
3. Check processor type:

   - Apple M1/M2/M3 → Download ARM version
   - Intel processor → Download Intel version
 :::

4. Download the `.zip` file for your architecture
5. Double-click to extract the archive
6. Drag Flexpilot IDE to your Applications folder
7. Right-click and select "Open" to launch first time
8. Enter system password if prompted

## Try Online Instantly

Looking to use Flexpilot IDE without any setup? Try our online version at [ide.flexpilot.ai](https://ide.flexpilot.ai/?folder=web-fs://github/flexpilot-ai/flexpilot-ide/main). It's the perfect solution for browsing GitHub repositories online without the need to clone them locally, making your workflow faster and more efficient!

::: warning Online Version Limitations
The web version has limited functionality compared to the desktop app. Some features may be restricted or unavailable.
:::

Open any GitHub repository directly using this URL format:

```
https://ide.flexpilot.ai/?folder=web-fs://github/<owner>/<repo>/<branch>
```

Example:

```
https://ide.flexpilot.ai/?folder=web-fs://github/flexpilot-ai/flexpilot-ide/main
```

## URL Quick Launch

Transform any GitHub repository into an instant development environment by simply modifying the URL. Just change `github.com` to `githubide.com` in your browser's address bar to open that repository directly in FlexPilot IDE.

::: tip Quick Access
No need to remember complex URLs - just add "ide" to any GitHub URL you're browsing!
:::

Here's how it works:

```
Original: https://github.com/username/repository
Modified: https://githubide.com/username/repository
```

Example:

```
Original: https://github.com/flexpilot-ai/flexpilot-ide
Modified: https://githubide.com/flexpilot-ai/flexpilot-ide
```

## GitHub Integration

To unlock full access to Flexpilot IDE's features, sign in with your GitHub account. This will enable a personalized experience by utilizing your GitHub profile details, such as your profile picture and name, in chat interfaces and other features.

1. Open Command Palette:
   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`
2. Type `Flexpilot: Sign In with GitHub` and press `Enter`
3. Follow the prompts to authorize Flexpilot IDE with your GitHub account
4. Enjoy personalized experience with your GitHub profile!
