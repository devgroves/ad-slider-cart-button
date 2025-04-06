import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js'; 

@customElement('add-to-cart')
export class AddToCart extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin: 20px;
    }

    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      padding: 10px;
    }

.card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
  overflow: visible; /* Ensure nothing is clipped */
}
    .card:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px; /* Ensures spacing between the image and button */
}

button {
  margin-top: 10px; /* Adds space above the button */
  background-color: #ff8000;
  color: white;
  border: none;
  padding: 13px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1; /* Ensure the button is above the image */
}

    button:hover {
      background-color: #cc6600; 
      transform: scale(1.05); 
    }
     

    .counter {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }

  `;

  @property({ type: Array }) cartCounts = [0, 0, 0, 0, 0, 0];

  override render() {
    const images = [
      "https://img.freepik.com/premium-vector/dark-blue-lighting-effect-background-cosmetic_127132-84.jpg",
      "https://img.freepik.com/premium-photo/stylish-modern-product-display_1203-5526.jpg",
      "https://img.freepik.com/free-photo/beauty-product-mockup-light-background_53876-97607.jpg",
      "https://img.freepik.com/free-psd/classic-red-bicycle-vintage-ride_191095-87736.jpg",
      "https://img.freepik.com/free-vector/organic-cream-with-lotus-flower_98292-6896.jpg",
      "https://img.freepik.com/free-photo/businessman-checking-time_1357-97.jpg",
    ];

    return html`
      <div class="gallery-container">
        ${images.map(
      (image, index) => html`
            <div class="card">
              <img src=${image} alt="Product ${index + 1}" />
              ${this.cartCounts[index] > 0
          ? html`
                    <div class="counter">
                      <button style=${styleMap({borderRadius: '5px 0 0 5px'})} @click=${() => this._decrementCount(index)}>-</button>
                         <span style=${styleMap({
                           backgroundColor: '#ff8000',
                           color: 'white',
                           padding: '13px 20px',
                           marginTop: '10px',
                           fontSize: '16px',
                           display: 'inline-block',
                         })}>
                        ${this.cartCounts[index]}
                      </span>
                      <button style=${styleMap({borderRadius: '0 5px 5px 0'})} @click=${() => this._incrementCount(index)}>+</button>
                    </div>
                  `
          : html`<button @click=${() => this._incrementCount(index)}>Add to Cart</button>`}
            </div>
          `
    )}
      </div>
    `;
  }
  private _incrementCount(index: number) {
    // Update cartCounts immutably to ensure reactivity
    this.cartCounts = [
      ...this.cartCounts.slice(0, index),
      this.cartCounts[index] + 1,
      ...this.cartCounts.slice(index + 1),
    ];
    this._updateTotalCartCount();
  }

  private _decrementCount(index: number) {
    if (this.cartCounts[index] > 0) {
      // Update cartCounts immutably to ensure reactivity
      this.cartCounts = [
        ...this.cartCounts.slice(0, index),
        this.cartCounts[index] - 1,
        ...this.cartCounts.slice(index + 1),
      ];
      this._updateTotalCartCount();
    }
  }

  private _updateTotalCartCount() {
    const totalCartCount = this.cartCounts.reduce((total, count) => total + count, 0); 
    this.dispatchEvent(
      new CustomEvent('update-cart', {
        detail: totalCartCount, 
        bubbles: true,
        composed: true,
      })
    );
  }
}
