document.getElementById("b1").addEventListener("click", function () {
    
  chrome.runtime.sendMessage({ scriptToRun: "scrape_1" });
});

document.getElementById("b2").addEventListener("click", function () {
  chrome.runtime.sendMessage({ scriptToRun: "scrape_2" });
});
