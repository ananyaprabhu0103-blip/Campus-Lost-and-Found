

// Get the form and item lists
const itemForm = document.getElementById("itemForm");
const lostList = document.getElementById("lostList");
const foundList = document.getElementById("foundList");
const searchInput = document.getElementById("searchInput");

// Submit a new lost or found item
itemForm.addEventListener("submit", function(event) {
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

    card.appendChild(heading);
    card.appendChild(status);
    card.appendChild(itemDescription);
    card.appendChild(itemLocation);

    // Add card to the correct section
    if (itemType === "Lost") {
        lostList.appendChild(card);
    } else {
        foundList.appendChild(card);
    }

    // Clear the form
    itemForm.reset();

    // Apply the current search filter
    filterItems();

    alert("Your item has been reported successfully!");
});

// Search items
function filterItems() {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".item-card");

    cards.forEach(function(card) {
        const itemText = card.textContent.toLowerCase();

        if (itemText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Run search whenever the user types
searchInput.addEventListener("input", filterItems);
