import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './cart-header';
import './add-to-cart';
import './ads-loader';

@customElement('shopping-app')
export class ShoppingApp extends LitElement {
  static override styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
    }
    .card {
      display: grid;
    }
  `;

  @property({ type: Number }) cartCount = 0;

  override render() { // Add 'override' here
    return html`
      <cart-header .cartCount=${this.cartCount}></cart-header>
      <ads-loader></ads-loader>
      <add-to-cart @update-cart=${this._updateCart}></add-to-cart>
      
    `;
  }

  private _updateCart(e: CustomEvent) {
    this.cartCount = e.detail;
  }
}

