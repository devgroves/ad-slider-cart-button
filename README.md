# LitElement TypeScript starter

This project includes a sample component using LitElement with TypeScript.

The project features an elegant Ad Slider and a functional Add-to-Cart Button, showcasing reusable components with polished styling.

## Features
- **Cart Header**: Displays the current number of items in the cart.
- **Add to Cart**: Allows users to add items to the cart.
- **Ads Loader**: Loads and displays advertisements.

## Setup


1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shopping-app.git

   cd shopping-app

2. **Install dependencies**:

```bash
npm i
```
3. **Build**:
This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.
To build the JavaScript version of your component:

```bash
npm run build
```
4. **Run the development server:**:

```bash
npm run serve
```
5. **Open the application:**:
Open your browser and navigate to http://localhost:8000 to see the app in action.

## Project Structure

1.src/components/: Contains the custom elements used in the application.
 **add-to-cart.ts**:Handles adding items to the cart.
 **ads-loader.ts**:Loads and displays ads.

  **cart-header.ts**:Displays the cart count.

  **shopping-app.ts:**:The main application component.

 2. index.html: The entry point for the application.

## Usage
### Custom Elements
<shopping-app>: The root component of the application.

<cart-header>: Displays the current cart count.

<add-to-cart>: Allows users to add items to the cart.

<ads-loader>: Loads and displays advertisements.

Example
<shopping-app></shopping-app>
This will render the entire shopping application.

## Demos

 **Ad Slider and Add-to-Cart Button**: A demo of a sliding advertisement component and an Add to Cart section
![Demo](./addtocartlitdemo.gif)