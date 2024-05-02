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

    productAccessoryCard.forEach((div, index) => {
        const endIndex = (currentPosition + accessoryCardFit - 1) % totalDivs;

        if (isWithinRange(index, currentPosition, endIndex, totalDivs)) {
            div.style.display = 'block'; // Show the card
        } else {
            div.style.display = 'none'; // Hide the card
        }
    });
}

function isWithinRange(index, start, end, total) {
    if (start <= end) {
        return index >= start && index <= end;
    } else {
        return index >= start || index <= end;
    }
}


function scrollLeft() {
    const totalDivs = document.querySelectorAll('.product_accessory_card').length;

    currentPosition = (currentPosition - 1 + totalDivs) % totalDivs; // Wrap around to the last card if at the beginning

    updateAccessoryVisibility(accessoryCardFit);
}

function scrollRight() {
    const totalDivs = document.querySelectorAll('.product_accessory_card').length;

    currentPosition = (currentPosition + 1) % totalDivs; // Wrap around to the first card if at the end

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
