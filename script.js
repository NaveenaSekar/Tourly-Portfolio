function getBasePackingList() {
    return {
        Clothing: [],
        Toiletries: ["Toothbrush", "Toothpaste", "Shampoo", "Soap"],
        Electronics: ["Phone", "Charger"],
        Documents: ["Passport", "ID", "Travel Insurance"],
        Miscellaneous: ["Snacks", "Water Bottle", "First Aid Kit"]
    };
}

function customizePackingList(destination, duration, activities) {
    const packingList = getBasePackingList();

    // Clothing suggestions based on destination
    if (destination.toLowerCase() === "tropical" || destination.toLowerCase() === "beach") {
        packingList.Clothing.push("Swimsuit", "Sunglasses", "Flip Flops");
    } else if (destination.toLowerCase() === "cold" || destination.toLowerCase() === "mountains") {
        packingList.Clothing.push("Warm Jacket", "Hiking Boots", "Thermal Wear");
    }

    // Additional items based on activities
    activities.forEach(activity => {
        if (activity.trim().toLowerCase() === "hiking") {
            packingList.Clothing.push("Hiking Pants");
            packingList.Miscellaneous.push("Hiking Gear");
        } else if (activity.trim().toLowerCase() === "business") {
            packingList.Clothing.push("Business Attire");
            packingList.Documents.push("Business Cards");
        } else if (activity.trim().toLowerCase() === "beach") {
            packingList.Clothing.push("Beach Towel");
        }
    });

    return packingList;
}

document.getElementById("packing-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const duration = document.getElementById("duration").value;
    const activities = document.getElementById("activities").value.split(",");

    const packingList = customizePackingList(destination, duration, activities);

    let output = "<h2>Your Packing List:</h2>";
    for (const [category, items] of Object.entries(packingList)) {
        output += `<strong>${category}:</strong> ${items.join(", ")}<br>`;
    }

    document.getElementById("packing-list").innerHTML = output;
});
