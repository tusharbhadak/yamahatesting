let currentPosition = 0; 
let productAccessories;
let productAccessoryCard;
let accessoryCardFit;

function adjustAccessoryVisibility() {
    // Get the product accessories container and all accessory cards
    productAccessories = document.querySelector('.product_accessories');
    productAccessoryCard = document.querySelectorAll('.product_accessory_card');

    // Calculate the width of the accessories container and each accessory card
    const accessoryContainerWidth = productAccessories.offsetWidth;
    const accessoryCardWidth = productAccessoryCard[currentPosition].offsetWidth + 20; // Adjust based on your margin

    // Calculate how many accessory cards can fit within the container
    accessoryCardFit = Math.max(1, Math.floor(accessoryContainerWidth / accessoryCardWidth));

    // Update visibility of accessory cards based on the current position
    updateAccessoryVisibility(accessoryCardFit);
}

function updateAccessoryVisibility(accessoryCardFit) {
    const totalDivs = productAccessoryCard.length;
    const endIndex = (currentPosition + accessoryCardFit - 1) % totalDivs;

    productAccessoryCard.forEach((div, index) => {
        const isVisible =
            currentPosition <= endIndex
                ? index >= currentPosition && index <= endIndex
                : index >= currentPosition || index <= endIndex;

        div.style.display = isVisible ? 'block' : 'none';
    });
}


function scrollLeft() {
    const totalDivs = productAccessoryCard.length;
    currentPosition = (currentPosition - 1 + totalDivs) % totalDivs;
    updateAccessoryVisibility(accessoryCardFit);
}

function scrollRight() {
    const totalDivs = productAccessoryCard.length;
    currentPosition = (currentPosition + 1) % totalDivs;
    updateAccessoryVisibility(accessoryCardFit);
}


// Add event listeners to left and right arrow buttons for large and small screens
document.getElementById('product_accessory_left_lg').addEventListener('click', scrollLeft);
document.getElementById('product_accessory_right_lg').addEventListener('click', scrollRight);
document.getElementById('product_accessory_left_sm').addEventListener('click', scrollLeft);
document.getElementById('product_accessory_right_sm').addEventListener('click', scrollRight);

// Adjust accessory visibility on page load and window resize
window.addEventListener('load', adjustAccessoryVisibility);
window.addEventListener('resize', adjustAccessoryVisibility);

// Initial adjustment of accessory visibility
adjustAccessoryVisibility();
