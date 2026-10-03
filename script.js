
// Welcome Page
const welcomePage = document.getElementById("welcomePage");
const appContent = document.getElementById("appContent");
const enterSite = document.getElementById("enterSite");

enterSite.addEventListener("click", function () {
    welcomePage.style.display = "none";
    appContent.hidden = false;
});

// Get the form and item lists
const itemForm = document.getElementById("itemForm");
const lostList = document.getElementById("lostList");
const foundList = document.getElementById("foundList");
const searchInput = document.getElementById("searchInput");

// Submit a new lost or found item
itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get details from the form
    const itemName = document.getElementById("itemName").value.trim();
    const description = document.getElementById("description").value.trim();
    const itemType = document.getElementById("itemType").value;
    const location = document.getElementById("location").value.trim();

    // Create a new item card
    const card = document.createElement("div");
    card.className = "item-card";

    const heading = document.createElement("h3");
    heading.textContent = itemName;

    const status = document.createElement("p");
    status.textContent = "Status: " + itemType;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = "Description: " + description;

    const itemLocation = document.createElement("p");
    itemLocation.textContent = "Location: " + location;

    // Add details to the card
    card.appendChild(heading);
    card.appendChild(status);
    card.appendChild(itemDescription);
    card.appendChild(itemLocation);

    // Add the card to the correct section
    if (itemType === "Lost") {
        lostList.appendChild(card);
    } else if (itemType === "Found") {
        foundList.appendChild(card);
    }

    // Clear the form
    itemForm.reset();

    // Apply the current search filter
    filterItems();

    // Remove any previous success message
    const oldMessage = document.querySelector(".success-message");
    if (oldMessage) {
        oldMessage.remove();
    }

    // Show success message
    const message = document.createElement("p");
    message.textContent = "Your item has been reported successfully!";
    message.className = "success-message";
    message.setAttribute("role", "status");

    itemForm.after(message);

    // Remove the message after 3 seconds
    setTimeout(function () {
        message.remove();
    }, 3000);
});

// Search Items
function filterItems() {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".item-card");

    cards.forEach(function (card) {
        const itemText = card.textContent.toLowerCase();

        if (itemText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Run search whenever the user types
searchInput.addEventListener("input", filterItems);
