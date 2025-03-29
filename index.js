const BASE_URL = "https://phase-1-final-project-wheat.vercel.app/veggies"; 
"https://phase-1-final-project-wheat.vercel.app/drinks", "https://phase-1-final-project-wheat.vercel.app/fruits",

function fetchAndDisplayItems() {
    fetch("http://localhost:3000/items")
        .then((response) => response.json())
        .then((data) => {
            const itemsContainer = document.getElementById("items-container");
            itemsContainer.innerHTML = ""; 

            data.forEach((item) => {
                const itemCard = document.createElement("div");
                itemCard.classList.add("item-card");

                itemCard.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" />
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price}</p>
                    <button class="buy-btn" data-id="${item.id}">Buy Now</button>
                `;

                itemsContainer.appendChild(itemCard);
            });
        })
        .catch((error) => console.error("Error fetching items:", error));
}


function addItem(category, newItem) {
    fetch(`http://localhost:3000/${category}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
    })
        .then((response) => response.json())
        .then(() => fetchAndDisplayItems())
        .catch((error) => console.error("Error adding item:", error));
}


document.getElementById("add-item-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    if (category && name && price && description && image) {
        addItem(category, { name, price, description, image });
        document.getElementById("add-item-form").reset();
        alert("Item added successfully!");
    } else {
        alert("Please fill in all fields!");
    }
});


document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("add-item-form").reset();
});


fetchAndDisplayItems();
