
const BASE_URL = 'https://phase-1-final-project-wheat.vercel.app/veggies';


async function fetchData(category) {
    try {
        const response = await fetch(`${BASE_URL}/${category}`);
        const data = await response.json();
        displayData(category, data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


document.getElementById('add-item-form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const category = document.getElementById('category').value;
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    if (category && name && price && description && image) {
        addItem(category, { name, price, description, image });
        document.getElementById('add-item-form').reset(); 
        alert('Item added successfully!');
    } else {
        alert('Please fill in all fields!');
    }
});


document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('add-item-form').reset(); 
});


async function addItem(category, newItem) {
    try {
        await fetch(`${BASE_URL}/${category}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        fetchData(category); 
    } catch (error) {
        console.error('Error adding item:', error);
    }
}


async function deleteItem(category, id) {
    try {
        await fetch(`${BASE_URL}/${category}/${id}`, {
            method: 'DELETE'
        });
        fetchData(category); 
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}


async function updateItem(category, id, updatedData) {
    try {
        await fetch(`${BASE_URL}/${category}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        });
        fetchData(category);
    } catch (error) {
        console.error('Error updating item:', error);
    }
}


function addEventListeners() {
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const id = event.target.dataset.id;
            const category = event.target.dataset.category;
            deleteItem(category, id);
        } else if (event.target.classList.contains('edit-btn')) {
            const id = event.target.dataset.id;
            const category = event.target.dataset.category;
            const newName = prompt('Enter new name:');
            const newPrice = prompt('Enter new price:');
            if (newName && newPrice) {
                updateItem(category, id, { name: newName, price: parseFloat(newPrice) });
            }
        }
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-btn')) {
            event.preventDefault(); 
    
            const id = event.target.dataset.id;
            const category = event.target.dataset.category;
    
            
            alert(`Item ID: ${id}, Category: ${category} has been added to cart!`);
        }
    });
    
    
    const addBtn = document.querySelector('#add-item-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const category = prompt('Enter category (veggies, drinks, fruits):');
            const name = prompt('Enter name:');
            const price = prompt('Enter price:');
            const description = prompt('Enter description:');
            const image = prompt('Enter image URL:');

            if (category && name && price && description && image) {
                addItem(category, {
                    name,
                    price: parseFloat(price),
                    description,
                    image
                });
            }
        });
    }
}


function init() {
    ['veggies', 'drinks', 'fruits'].forEach(fetchData); 
    addEventListeners();
}


init();
