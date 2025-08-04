let activeTabId = null;
let lastActivated = Date.now();
let websiteTimes = {};

// Save data to Chrome local storage
function saveData() {
  chrome.storage.local.set({ websiteTimes });
}

// Function to send time data to backend server
function sendDataToBackend(domain, timeSpent) {
  const userId = "demo-user"; // Replace with real user ID if available

  fetch('http://localhost:5000/api/time/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: userId,
      domain: domain,
      timeSpent: timeSpent, // in milliseconds
      timestamp: new Date()
    })
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send time data');
    }
  })
  .catch(error => {
    console.error('Error sending data to backend:', error);
  });
}

// Helper to record time spent on the previous active tab
function recordTime() {
  if (activeTabId !== null) {
    chrome.tabs.get(activeTabId, (tab) => {
      if (chrome.runtime.lastError || !tab || !tab.url) {
        return; // tab no longer exists or no url available
      }
      try {
        if (!tab.url.startsWith('http')) {
          return; // Ignore non-web URLs like chrome:// or extensions pages
        }
        const url = new URL(tab.url);
        const domain = url.hostname;
        const now = Date.now();
        const timeSpent = now - lastActivated;
        if (timeSpent > 1000) { // Only count if time spent is more than 1 second
          websiteTimes[domain] = (websiteTimes[domain] || 0) + timeSpent;
          saveData();

          // Send data to backend
          sendDataToBackend(domain, timeSpent);
        }
      } catch (error) {
        // Invalid URL or other error: ignore
      }
    });
  }
}

// Fired when the active tab changes
chrome.tabs.onActivated.addListener((activeInfo) => {
  // First, record the time spent on previous tab
  recordTime();

  // Update to new active tab and current time
  activeTabId = activeInfo.tabId;
  lastActivated = Date.now();
});

// Fired when the URL or properties of a tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    // When the active tab finishes loading, update activeTabId and reset lastActivated
    activeTabId = tabId;
    lastActivated = Date.now();
  }
});

// Fired when window focus changes (user switches windows)
chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Browser lost focus (e.g., minimized), record time spent on current tab so far
    recordTime();
    activeTabId = null;
  } else {
    // Browser gained focus, reset timer for active tab
    chrome.tabs.query({ active: true, windowId: windowId }, (tabs) => {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        lastActivated = Date.now();
      }
    });
  }
});

// Save data before the service worker (background script) is terminated by Chrome
chrome.runtime.onSuspend.addListener(() => {
  recordTime();
});
