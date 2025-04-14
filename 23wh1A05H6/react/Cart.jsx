export default function Cart() {
    return (
      <div className="container">
        <h2>Your Cart</h2>
        <table>
          <tr>
            <th>E‑Book Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>E‑Book Title 1</td>
            <td>$10</td>
            <td>1</td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <td>E‑Book Title 2</td>
            <td>$15</td>
            <td>2</td>
            <td><button>Remove</button></td>
          </tr>
        </table>
      </div>
    );
  }
  
