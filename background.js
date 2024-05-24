// Listen for clicks on the extension's browser action icon
chrome.action.onClicked.addListener(async function(tab) {
    // Perform actions when the extension icon is clicked
    console.log("Extension icon clicked!");

    // Get the URL of the active tab
    const url = tab.url;

    // Send the URL back to the content script
    chrome.tabs.sendMessage(tab.id, { action: "sendTabUrl", url: url });
});
