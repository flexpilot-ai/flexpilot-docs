---
title: OpenAI-Compatible API Setup Guide
description: Learn how to set up and configure OpenAI-compatible model providers like Ollama, Lm Studio, vLLM, Anyscale and more in the Flexpilot IDE.
outline: deep
---

# Configuring OpenAI-Compatible Models

Configure OpenAI-compatible models in Flexpilot IDE using cloud providers like Anyscale Endpoints or self-hosted solutions such as Ollama, Lm Studio, LocalAI, and vLLM. Gather the required details and follow the [setup guide](/docs/configuration/chat.md#setting-up-your-model) to integrate the model.

## Configuration Reference

Use the following settings to configure an OpenAI-compatible API provider in Flexpilot:

::: details Configuration Fields {open}
| Field | Description | Default/Recommended |
|-----------------|---------------------------------|----------------------------|
| API URL | Base endpoint URL | `http://localhost:11434/v1` |
| API Key | Your secret key | `ollama` |
| Model ID | Model identifier | `llama-3.3-70b` |
| Temperature | Response creativity (0-1) | `0.2` for code generation |
| Headers | Custom HTTP headers | Leave it blank |
| URL Parameters | Query parameters | Leave it blank |
| Tool Calling | Function calling support | `false` |
:::

::: tip 💡 Pro Tips
- Each provider may have specific endpoint URLs and authentication requirements
- Use lower temperatures (0.1-0.3) for more deterministic code generation.
- The default API URL works for most users; only change it if using a proxy.
:::

## Available Providers

Below is a list of some popular OpenAI-compatible API providers and services that you can use with Flexpilot, with the help of OpenAI Compatible Chat Model Provider.

> [!NOTE]
> The following list is not exhaustive and may not include all available providers. Please refer to the provider's documentation for more details.

### Major Cloud Providers
- Cloudflare Workers AI
- Together AI
- Perplexity AI (pplx-api)
- Anyscale Endpoints
- Deepseek API
- IBM Watsonx.ai
- NVIDIA NIM
- NVIDIA Triton Inference Server
- Voyage AI
- Jina AI
- Aleph Alpha
- Baseten
- OpenRouter
- Predibase
- Galadriel API
- FriendliAI
- Deepgram Listen
- LM Studio Cloud
- Volcano Engine (Volcengine)
- XAI API
- GitHub Models
- Petals Distributed
- GooseAI
- EleutherAI Cloud
- LeewayHertz AI
- bitcot Intelligence
- BotsCrew API
- Classic Informatics
- HuggingFace Inference
- Databricks Foundation Models
- IBM Watson Code Assistant
- SAP AI Core
- Oracle Cloud AI
- Alibaba PAI
- Tencent TI-ONE
- Baidu Qianfan
- Yandex Toloka
- Naver Clova
- Kakao Brain
- LG AI Research
- Samsung SDS
- Huawei Cloud Pangu
- DeepMind API
- Inflection AI
- Adept API
- Character.AI
- AI21 Labs
- Writer.com
- Typeface AI
- Jasper API
- Copy.ai
- ShortlyAI

### Open Source Implementations
- vLLM
- FastChat
- LocalAI
- llama.cpp
- mlc-llm
- ExLlamaV2
- Ollama
- Text-Generation-WebUI
- KoboldCpp
- TabbyAPI
- TensorRT-LLM
- LM Studio
- OpenLLM
- RayLLM
- GPT4All

### Middleware Solutions
- LiteLLM
- BerriAI
- AI Gateway
- LangChain Serve
- Javelin Proxy
- Portkey Gateway
- Marsha API Router
- Unify AI
- Kong AI Gateway

### Enterprise Platforms
- Salesforce Einstein
- Atlassian Intelligence
- SAP AI Core
- Oracle Digital Assistant
- ServiceNow Intelligence
- Adobe Sensei
- IBM Watsonx Code Assistant
- DataRobot LLM Ops
- Alteryx AI Platform

## Next Steps  

Set up the API credentials obtained from this page's instructions in the Flexpilot IDE to enable the Chat Model. For detailed guidance, refer to the [Setup Guide](/docs/configuration/chat.md#setting-up-your-model).