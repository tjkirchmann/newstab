// Default
const EXAMPLE_BOOKMARKS = [
    { title: "Google", url: "https://www.google.com" },
    { title: "GitHub", url: "https://www.github.com" },
    { title: "Stack Overflow", url: "https://stackoverflow.com" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { title: "Chrome DevTools", url: "https://developer.chrome.com/docs/devtools/" },
];

// Helper to filter bookmarks by similarity
function searchBookmarks(query, bookmarks) {
    return bookmarks.filter(bookmark =>
        bookmark.title.toLowerCase().includes(query.toLowerCase())
    );
}

const bookmarkSearch = document.getElementById("input1");

bookmarkSearch.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    if (query.length <= 3) {
        return ""
    } else {
        return bookmarkSearch(query, EXAMPLE_BOOKMARKS)
    }
});