var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let AdsLoader = class AdsLoader extends LitElement {
    constructor() {
        super(...arguments);
        this.ads = [
            {
                image: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-shopping-cart_23-2151680530.jpg?ga=GA1.1.594895783.1699521893&semt=ais_hybrid',
            },
            {
                image: 'https://img.freepik.com/premium-photo/shopping-sale-t-shirts-50-discount-sales-male-female-closing-section-shirts-horizontal-copyspace_73324-903.jpg?ga=GA1.1.594895783.1699521893&semt=ais_hybrid',
                text: 'Taste the best delights delivered to your door!',
            },
            {
                image: 'https://img.freepik.com/free-photo/high-angle-assortment-vegetables_23-2148853348.jpg?ga=GA1.1.594895783.1699521893&semt=ais_authors_boost',
                text: 'Taste the best organic delights delivered to your door!.',
            },
        ];
        this.activeSlide = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this._startAutoSlide(); // Start auto-sliding
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._stopAutoSlide(); // Stop auto-sliding when the component is disconnected
    }
    _nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.ads.length; // Loop back to the first slide
    }
    _prevSlide() {
        this.activeSlide = (this.activeSlide - 1 + this.ads.length) % this.ads.length; // Loop back to the last slide
    }
    _startAutoSlide() {
        this._intervalId = window.setInterval(() => {
            this._nextSlide();
        }, 5000); // Change slides every 5 seconds
    }
    _stopAutoSlide() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
    }
    render() {
        return html `
      <div class="slider-container" style="transform: translateX(-${this.activeSlide * 100}%);">
        ${this.ads.map((ad) => html `
            <div class="slide">
              <img src="${ad.image}" alt="Ad Image" />
              <p class="ad-text">${ad.text}</p>
            </div>
          `)}
      </div>
      <div class="controls">
        <!-- Arrow icons for manual navigation -->
        <button class="control-button" @click=${this._prevSlide}>&#8249;</button> <!-- Left arrow -->
        <button class="control-button" @click=${this._nextSlide}>&#8250;</button> <!-- Right arrow -->
      </div>
    `;
    }
};
AdsLoader.styles = css `
    :host {
      display: block;
      width: 100%;
      max-width: 800px; 
      margin: 20px auto;
      overflow: hidden;
      position: relative;
    }

    .slider-container {
      display: flex;
      transition: transform 0.5s ease-in-out; /* Smooth slide transition */
    }

    .slide {
      flex: 0 0 100%; /* Each slide takes 100% width */
      text-align: center;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }

    .ad-text {
      margin-top: 10px;
      font-size: 14px;
      color: #333;
    }

    .controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      pointer-events: none;
    }

    .control-button {
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      pointer-events: auto; /* Enable clicking */
      transition: background-color 0.3s ease;
    }

    .control-button:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  `;
__decorate([
    state()
], AdsLoader.prototype, "ads", void 0);
__decorate([
    state()
], AdsLoader.prototype, "activeSlide", void 0);
AdsLoader = __decorate([
    customElement('ads-loader')
], AdsLoader);
export { AdsLoader };
//# sourceMappingURL=ads-loader.js.map