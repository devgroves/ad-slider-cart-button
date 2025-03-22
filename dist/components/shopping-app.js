var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './cart-header';
import './add-to-cart';
import './ads-loader';
let ShoppingApp = class ShoppingApp extends LitElement {
    constructor() {
        super(...arguments);
        this.cartCount = 0;
    }
    render() {
        return html `
      <cart-header .cartCount=${this.cartCount}></cart-header>
      <ads-loader></ads-loader>
      <add-to-cart @update-cart=${this._updateCart}></add-to-cart>
      
    `;
    }
    _updateCart(e) {
        this.cartCount = e.detail;
    }
};
ShoppingApp.styles = css `
    :host {
      display: block;
      text-align: center;
      padding: 20px;
    }
  `;
__decorate([
    property({ type: Number })
], ShoppingApp.prototype, "cartCount", void 0);
ShoppingApp = __decorate([
    customElement('shopping-app')
], ShoppingApp);
export { ShoppingApp };
//# sourceMappingURL=shopping-app.js.map