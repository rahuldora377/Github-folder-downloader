// Send a message to the background script requesting the current tab's URL
chrome.runtime.sendMessage({ action: "getCurrentTabUrl" });

// Listen for response from the background script
chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
    if (message.action === "sendTabUrl") {
        const url = message.url;
        console.log("Current tab URL:", url);
        window.open(`${"https://download-directory.github.io/?url="+url}`)
        // You can use the URL here as needed
    }
});
