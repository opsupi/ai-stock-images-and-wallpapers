// Replace placeholder URLs with your AI-generated image URLs
const imageUrls = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300"
];

// Function to dynamically create image elements
function createImageElements() {
    const imageContainer = document.getElementById('imageContainer');

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'AI Image';
        imageContainer.appendChild(img);
    });
}

// Function to update site name
function updateSiteName(newName) {
    const siteName = document.getElementById('siteName');
    siteName.textContent = newName;
}

// Call functions
createImageElements();
updateSiteName("Your Daily AI Images");
