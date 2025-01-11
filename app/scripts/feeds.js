const feeds = {
    "Startups": "https://rss.app/embed/v1/wall/tL1eKlNe7dSq3ahe",
    "Technology": "https://rss.app/embed/v1/wall/t9A4UxHSkANHrerN",
};

let currentFeedIndex = 0;
const feedNames = Object.keys(feeds);
const feedFrame = document.getElementById("feed-frame");
const feedHeadings = document.getElementById("feed-headings");

// Function to render headings
function renderHeadings() {
    feedHeadings.innerHTML = ""; // Clear existing headings

    feedNames.forEach((name, index) => {
        const heading = document.createElement("span");
        heading.textContent = name;
        heading.style.margin = "0 10px";
        heading.style.cursor = "pointer";
        heading.style.fontWeight = index === currentFeedIndex ? "bold" : "normal";

        heading.addEventListener("click", () => {
            currentFeedIndex = index;
            updateFeed();
        });

        feedHeadings.appendChild(heading);
    });
}

// Function to update iframe and headings
function updateFeed() {
    const currentFeedName = feedNames[currentFeedIndex];
    feedFrame.src = feeds[currentFeedName];
    renderHeadings();
}

// Automatically cycle through feeds every 10 seconds
setInterval(() => {
    currentFeedIndex = (currentFeedIndex + 1) % feedNames.length;
    updateFeed();
}, 10000);

// Initialize the feed
updateFeed();
