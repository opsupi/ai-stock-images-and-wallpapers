// This is where your JavaScript code will go
// Fetch your AI-generated image URLs here and replace the placeholders
const imageUrls = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300"
];

// Function to dynamically create image elements
function createImageElements() {
    const imageContainer = document.querySelector('.image-container');

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'AI Image';
        imageContainer.appendChild(img);
    });
}

// Call the function to create image elements
createImageElements();
