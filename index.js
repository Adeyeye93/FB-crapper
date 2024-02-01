browser.contextMenus.create({
    id: "fb-scrape-1",
    title: "FB Scrape Vertical List",
});

browser.contextMenus.create({
    id: "fb-scrape-2",
    title: "FB Scrape Horizontal List",
});
  
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "fb-scrape-1") {
            browser.tabs.executeScript({
            file: "scrape_1.js",
        });
    }
    if (info.menuItemId === "fb-scrape-2") {
            console.log('2')
            browser.tabs.executeScript({
            file: "scrape_2.js",
        });
    }
});