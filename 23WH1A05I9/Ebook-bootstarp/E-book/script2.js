// Add event to cart
function addToCart(eventName) {
    let cart = JSON.parse(localStorage.getItem("ticketCart")) || [];
    cart.push(eventName);
    localStorage.setItem("ticketCart", JSON.stringify(cart));
    alert(`${eventName} ticket added to cart.`);
  }
  
  // Render events dynamically (could be replaced with backend)
  document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById("eventCatalog");
    if (catalog) {
      const events = ["Concert A", "Movie B", "Drama C"];
      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${event}</h5>
              <p class="card-text">Enjoy ${event} live!</p>
              <button class="btn btn-success w-100" onclick="addToCart('${event}')">Book Ticket</button>
            </div>
          </div>`;
        catalog.appendChild(card);
      });
    }
  
    const cartList = document.getElementById("cartItems");
    if (cartList) {
      const items = JSON.parse(localStorage.getItem("ticketCart")) || [];
      if (items.length === 0) {
        cartList.innerHTML = `<li class="list-group-item">No tickets booked yet.</li>`;
      } else {
        items.forEach(item => {
          const li = document.createElement("li");
          li.className = "list-group-item";
          li.textContent = item;
          cartList.appendChild(li);
        });
      }
    }
  });
  