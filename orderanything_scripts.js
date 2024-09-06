const menuItems = [
    {
        name: "Grilled Salmon",
        description: "Perfectly grilled salmon served with a side of vegetables and rice.",
        price: "$19.99"
    },
    {
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.",
        price: "$14.99"
    },
    {
        name: "Vegetarian Pasta",
        description: "Pasta with a mix of seasonal vegetables and a light tomato sauce.",
        price: "$16.99"
    }
];

// Function to display menu items
function displayMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        
        menuList.appendChild(menuItem);
    });
}

// Function to handle reservation form submission
function handleReservation(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}! Your reservation for ${date} at ${time} has been confirmed.`;
    document.getElementById('confirmation-message').textContent = confirmationMessage;

    // Clear the form
    document.getElementById('reservation-form').reset();
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();

    // Attach event listener to the reservation form
    document.getElementById('reservation-form').addEventListener('submit', handleReservation);
});
