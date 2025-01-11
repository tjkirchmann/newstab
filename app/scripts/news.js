// CONSTANTS
const DELAY = 7000; // x / 1000 = seconds of delay
const EXAMPLE_FEEDS = {
    "Startups": "https://rss.app/embed/v1/wall/tL1eKlNe7dSq3ahe"
}
const NEWSCONTAINER = document.getElementById('news-container');


// CORE VARIABLES
let user_sites = [];
let index = 0;
// TODO: get user sites here and then compare length
let newsSites = user_sites.length > 0 ? user_sites : EXAMPLE_SITES;


// Update function
function updateNews() {
    // Set next site
    let currentSite = newsSites[index];
    console.log(`Updating News Sources... [${currentSite}]`)

    // Clear existing content
    NEWSCONTAINER.innerHTML = '';

    // Create and insert an iframe
    const iframe = document.createElement('iframe');
    iframe.src = newsSites[index];
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    NEWSCONTAINER.appendChild(iframe);

    // Update index for next loop
    index = (index + 1) % newsSites.length;
}


// set the interval and call the function
setInterval(updateNews, 7000);
updateNews();