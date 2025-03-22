// src/components/components.ts

import { AddToCart } from "./add-to-cart";
import { AdsLoader } from "./ads-loader";
import { CartHeader } from "./cart-header";
import { ShoppingApp } from "./shopping-app";


// Register custom elements
customElements.define('cart-header', CartHeader);
customElements.define('add-to-cart', AddToCart);
customElements.define('ads-loader', AdsLoader);
customElements.define('shopping-app', ShoppingApp);

export { CartHeader, AddToCart, AdsLoader, ShoppingApp };