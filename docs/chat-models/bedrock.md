---
title: AWS Bedrock Setup Guide
description: Learn how to set up and configure AWS Bedrock models in Flexpilot IDE
outline: deep
---

# Configuring AWS Bedrock Models

This page explains how to retrieve or generate API credentials for AWS Bedrock models. Once you have the configuration details, you can follow the guide [here](/docs/configuration/chat.md#setting-up-your-model) to set up the model in the Flexpilot IDE.

::: info 🔗 Quick Links
- [AWS Console](https://console.aws.amazon.com) - Manage your AWS account
- [AWS Bedrock Documentation](https://docs.aws.amazon.com/bedrock) - Official documentation
- [IAM Console](https://console.aws.amazon.com/iam) - Manage access credentials
- [Available Models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html) - Compare Bedrock model variants
:::

## Setup Guide

::: warning 🔒 Security Warning
Never commit AWS credentials to version control or share them publicly. Keep them secure!
:::

1. Login to [AWS Console](https://console.aws.amazon.com) or create a new account if you don't have one.
2. Navigate to IAM Console to create a new IAM user with Bedrock access permissions.
3. Generate Access Key ID and Secret Access Key for the IAM user.
4. Enable AWS Bedrock service in your desired region.
5. Visit the Bedrock [Models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html) documentation to select the appropriate model.

## Configuration Reference

Use these settings when configuring AWS Bedrock in Flexpilot IDE:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-------|-------------|-------------------|
| Nickname | Display name for the model | `Amazon Bedrock Model` |
| Region | AWS region identifier | `us-east-2` |
| Access Key ID | AWS access key | From IAM credentials |
| Secret Access Key | AWS secret key | From IAM credentials |
| Session Token | Temporary session token | Optional |
| Model ID | Bedrock model identifier | `us.anthropic.claude-3-5-sonnet-20241022-v2:0` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Tool Calling | Function calling support | `true` |
:::

::: tip 💡 Pro Tips
- Use lower temperatures (0.1-0.3) for more deterministic code generation
- Ensure your IAM user has appropriate Bedrock permissions
- Choose the region closest to your location for better latency
:::

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).