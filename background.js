chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.scriptToRun === "scrape_1") {

    chrome.tabs.executeScript(null, { file: "scrape_1.js" });

  } else if (request.scriptToRun === "scrape_2") {
    
    chrome.tabs.executeScript(null, { file: "scrape_2.js" });
    console.log("second button")
  }
});

let scriptInjected = false;
browser.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await browser.tabs.get(activeInfo.tabId);

  if (tab.url.startsWith("https://web.facebook.com/profile.php")) {
    if (!scriptInjected) {
      browser.tabs.executeScript(tab.id, {
        code: `
          run();
        `,
      });
    }
  }
});


