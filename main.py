from playwright.sync_api import sync_playwright
from time import sleep

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context(proxy = {
        "server": "https://proxyscrape.com/free-proxy-list:103.131.219.26",
        "username": "user",
        "password": "pass"
    })
    context.clear_cookies()
    page = context.new_page()


    #inject scripot before other stuff loads

    page.add_init_script(path="patches/base_stealth.js")

    page.goto("https://abrahamjuliot.github.io/creepjs/")

    page.wait_for_selector("#fingerprint-data > div.visitor-info > div > div:nth-child(2) > div:nth-child(2) > span")
    element = page.locator("#fingerprint-data > div.visitor-info > div > div:nth-child(2) > div:nth-child(2) > span")
    print(element.text_content())

    sleep(20)
    browser.close()
