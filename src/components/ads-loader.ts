import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('ads-loader')
export class AdsLoader extends LitElement {
  static override styles = css`
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

  @state()
  private ads = [
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

  @state()
  private activeSlide = 0;

  private _intervalId?: number;

  override connectedCallback(): void {
    super.connectedCallback();
    this._startAutoSlide(); // Start auto-sliding
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopAutoSlide(); // Stop auto-sliding when the component is disconnected
  }

  private _nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.ads.length; // Loop back to the first slide
  }

  private _prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.ads.length) % this.ads.length; // Loop back to the last slide
  }

  private _startAutoSlide(): void {
    this._intervalId = window.setInterval(() => {
      this._nextSlide();
    }, 5000); // Change slides every 5 seconds
  }

  private _stopAutoSlide(): void {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = undefined;
    }
  }

  override render() {
    return html`
      <div class="slider-container" style="transform: translateX(-${this.activeSlide * 100}%);">
        ${this.ads.map(
      (ad) => html`
            <div class="slide">
              <img src="${ad.image}" alt="Ad Image" />
              <p class="ad-text">${ad.text}</p>
            </div>
          `
    )}
      </div>
      <div class="controls">
        <!-- Arrow icons for manual navigation -->
        <button class="control-button" @click=${this._prevSlide}>&#8249;</button> <!-- Left arrow -->
        <button class="control-button" @click=${this._nextSlide}>&#8250;</button> <!-- Right arrow -->
      </div>
    `;
  }
}
