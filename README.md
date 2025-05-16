# 🕶️ CreepJS Test Bot (Python + Playwright + JS Patches)

This repo is a tactical stealth testing bot that uses **Python Playwright** and **JavaScript injection** to challenge anti-bot fingerprinting, specifically targeting [CreepJS](https://creepjs.dev).

## 🎯 Purpose

To detect and defeat browser fingerprinting mechanisms by injecting custom JavaScript patches (via `add_init_script()`) during browser startup and observing CreepJS detection results.

> Built for developers, researchers, and sovereign builders exploring stealth automation and evasion pipelines.

---

## 🧱 Stack

- **Python 3.10+**
- [**Playwright**](https://playwright.dev/python/)
- **JS patch injections** loaded into the browser pre-context
- Logging and stealth metric analysis

---

## 📁 Folder Structure

