function classifySite(domain) {
  // You can add or remove domains to customize classification
  const productive = ['leetcode.com','github.com','stackoverflow.com'];
  const unproductive = ['facebook.com','instagram.com','youtube.com','twitter.com'];
  if (productive.includes(domain)) return 'Productive';
  if (unproductive.includes(domain)) return 'Unproductive';
  return 'Neutral';
}

function formatMinutes(ms) {
  return Math.round(ms / 60000);
}

// Fetch the stored website times and build the report table
chrome.storage.local.get('websiteTimes', (data) => {
  const times = data.websiteTimes || {};
  const reportDiv = document.getElementById('report');
  if (Object.keys(times).length === 0) {
    reportDiv.textContent = "No browsing data recorded yet.";
    return;
  }
  let html = '<table><tr><th>Website</th><th>Minutes</th><th>Type</th></tr>';
  for (let [site, ms] of Object.entries(times)) {
    const mins = formatMinutes(ms);
    const type = classifySite(site);
    html += `<tr>
      <td>${site}</td>
      <td>${mins}</td>
      <td class="${type}">${type}</td>
    </tr>`;
  }
  html += '</table>';
  reportDiv.innerHTML = html;
});
