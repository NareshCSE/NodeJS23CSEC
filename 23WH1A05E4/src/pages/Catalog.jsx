import React from 'react';
import './styles.css'; // Optional: If you want to separate the styles into a CSS file

const Catalog = () => {
  return (
    <div className="catalog">
      <h2><b>BOOK CATALOGUE</b></h2>

      <table>
        <thead>
          <tr>
            <th><b>Book Preview</b></th>
            <th><b>Book Details</b></th>
            <th><b>Price</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/img1.jpg" alt="Data Structures" width="100" /></td>
            <td>Data Structures</td>
            <td>$800</td>
          </tr>
          <tr>
            <td><img src="/img2.jpg" alt="Python Programming" width="100" /></td>
            <td>Python Programming</td>
            <td>$200</td>
          </tr>
          <tr>
            <td><img src="/img3.jpg" alt="Quantum Computing" width="100" /></td>
            <td>Quantum Computing</td>
            <td>$250</td>
          </tr>
          <tr>
            <td><img src="/img4.jpg" alt="Computer Organization and Architecture" width="100" /></td>
            <td>Computer Organization and Architecture</td>
            <td>$400</td>
          </tr>
          <tr>
            <td><img src="/img5.jpg" alt="Operating Systems" width="100" /></td>
            <td>Operating Systems</td>
            <td>$500</td>
          </tr>
        </tbody>
      </table>

      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/finalpage.html'; }}>
        <button type="submit">Proceed to Buy</button>
      </form>
    </div>
  );
}

export default Catalog;
