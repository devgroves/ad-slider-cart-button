import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cart-header')
export class CartHeader extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background-color: #f8f9fa;
      border-bottom: 2px solid #ddd;
      position: relative; /* Ensures proper positioning of the icon */
    }

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .bag-icon {
      position: absolute;
      top: 50%; /* Center vertically relative to header */
      right: 20px; /* Position it near the right edge */
      transform: translateY(-50%);
      font-size: 24px;
      cursor: pointer;
      color: #555;
    }

    .product-count {
      position: absolute;
      top: -8px;
      right: -10px;
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
      font-weight: bold;
      line-height: 1; /* Prevents unnecessary padding inside */
      text-align: center;
    }
  `;

  @property({ type: Number }) cartCount = 0;

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('update-cart', this._updateCartCount as unknown as EventListener);
  }


  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('update-cart', this._updateCartCount as unknown as EventListener);
  }


  private _updateCartCount = (event: CustomEvent) => {
    this.cartCount = event.detail; // Update cartCount with total value
  };

  override render() {
    return html`
      <header>
        <h1>Welcome to ShopsSpark!</h1>
        <div class="bag-icon">
          👜
          <span class="product-count">${this.cartCount}</span>
        </div>
      </header>
    `;
  }
}
