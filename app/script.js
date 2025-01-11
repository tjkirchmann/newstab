// CONSTANTS
const DELAY = 7000; // x / 1000 = seconds of delay
const EXAMPLE_SITES = [
    'https://news.ycombinator.com',
    'https://www.bbc.com/news',
    'https://www.cnn.com'
];
const NEWSCONTAINER = document.getElementById('news-container');


// CORE VARIABLES
let user_sites = [];
let index = 0;
// TODO: get user sites here and then compare length
let newsSites = user_sites.length > 0 ? user_sites : EXAMPLE_SITES;


// Update function
function updateNews() {
    // Set next site
    let currentSite = newSites[index];
    console.log(`Updating News Sources... [${currentSite}]`)

    // Get Site and replace background image
    NEWSCONTAINER.style.backgroundImage = `url('${currentSite}')`;

    // Update index for next loop
    index = (index + 1) % newsSites.length;
}


// set the interval and call the function
setInterval(updateNews, 7000);
updateNews();