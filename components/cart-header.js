var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CartHeader = class CartHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.cartCount = 0;
        this._updateCartCount = (event) => {
            this.cartCount = event.detail; // Update cartCount with total value
        };
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('update-cart', this._updateCartCount);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('update-cart', this._updateCartCount);
    }
    render() {
        return html `
      <header>
        <h1>Welcome to ShopsSpark!</h1>
        <div class="bag-icon">
          👜
          <span class="product-count">${this.cartCount}</span>
        </div>
      </header>
    `;
    }
};
CartHeader.styles = css `
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
__decorate([
    property({ type: Number })
], CartHeader.prototype, "cartCount", void 0);
CartHeader = __decorate([
    customElement('cart-header')
], CartHeader);
export { CartHeader };
//# sourceMappingURL=cart-header.js.map