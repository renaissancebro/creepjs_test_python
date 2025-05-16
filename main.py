from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()
    

    stealth_path = os.path.abspath("patches/base_stealth.js")
    context.add_init_script(path=stealth_path)

    page = context.new_page()
    page.on("console", lambda msg: print("PAGE LOG:", msg.text))
    page.goto("https://abrahamjuliot.github.io/creepjs/")

    page.wait_for_timeout(10000)
    browser.close()
