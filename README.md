# 🛒 Product Price Calculator Pro - Smart Price Comparison Tool

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> **Smart Product Price Comparison Calculator** - Compare product prices across different e-commerce platforms, calculate unit costs, and make informed purchasing decisions with real-time image fetching and advanced unit conversions.

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🎯 Overview

**Product Price Calculator Pro** is a powerful web-based tool designed to help consumers and businesses compare product prices from different online retailers. Whether you're shopping for groceries, comparing bulk items, or analyzing per-unit costs, this calculator provides instant, accurate price comparisons with support for multiple measurement units.

### Why Use Product Price Calculator Pro?

- ✅ **Save Money**: Find the best deals by comparing unit prices across different products
- ✅ **Time Efficient**: Calculate complex unit conversions instantly
- ✅ **Smart Shopping**: Make data-driven purchasing decisions
- ✅ **Visual Comparison**: See product images side-by-side for easy identification
- ✅ **Flexible Units**: Support for weight (g, kg, mg), volume (L, mL), and custom units
- ✅ **Bulk Buying**: Calculate cost-per-unit for wholesale and retail quantities

## ✨ Key Features

### 🧮 Advanced Price Calculations

- **Multi-Product Comparison**: Add unlimited products to compare side-by-side
- **Unit Price Calculation**: Automatically calculates cost per unit (piece, gram, liter, etc.)
- **Bulk Pricing**: Calculates cost per 100 units for wholesale comparisons
- **Custom Quantity**: Find the exact cost for your required quantity
- **Real-time Updates**: Instant recalculation as you type

### 📏 Flexible Unit System

Support for multiple measurement units:
- **Count**: Per piece pricing
- **Weight**: Milligrams (mg), Grams (g), Kilograms (kg)
- **Volume**: Milliliters (mL), Liters (L)
- **Custom Units**: Define your own measurement units

### 🖼️ Visual Product Comparison

- **Automatic Image Fetching**: Paste product URLs to automatically fetch images
- **Product URLs**: Link directly to product pages for quick reference
- **Side-by-Side View**: Compare multiple products visually
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### 🎨 User-Friendly Interface

- **Editable Product Names**: Click to edit product names inline
- **Dynamic Labels**: Labels update based on selected units
- **Clear Visual Hierarchy**: Color-coded sections for easy navigation
- **Toast Notifications**: Instant feedback for user actions
- **Remove Products**: Easy product removal with one click

## 🌐 Live Demo

Experience the calculator in action: [View Live Demo](#)

*Note: Replace with your deployed application URL*

## 📸 Screenshots

### Main Interface
![Main Calculator Interface](screenshots/main-interface.png)
*Compare multiple products with automatic calculations*

### Product Comparison
![Product Comparison View](screenshots/product-comparison.png)
*Side-by-side product comparison with images and prices*

### Unit Conversion
![Unit Converter Feature](screenshots/unit-converter.png)
*Flexible unit conversion for accurate price comparison*

### Mobile Responsive
![Mobile View](screenshots/mobile-view.png)
*Fully responsive design works on all devices*

*Screenshots: To add actual screenshots, capture images of the application and save them in the `screenshots/` directory*

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional for local development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-price-calculator-pro.git
   cd product-price-calculator-pro
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file access
   open index.html
   
   # Option 2: Using Python's built-in server
   python3 -m http.server 8000
   # Visit http://localhost:8000
   
   # Option 3: Using Node.js http-server
   npx http-server -p 8000
   ```

3. **Start comparing prices!**

No build process or dependencies required - it's pure vanilla JavaScript!

## 📖 Usage Guide

### Basic Usage

1. **Add Products**
   - Click the "➕ Add Product" button to create a new product card
   - Default setup includes 4 product cards ready to use

2. **Enter Product Information**
   - **Product Name**: Click the name field to edit
   - **Product URL**: Paste the product link (optional - enables auto image fetch)
   - **Units Shown**: Enter how many units are in the package (default: 1)
   - **Unit Type**: Select the measurement unit (pieces, grams, liters, etc.)
   - **Unit Quantity**: Enter the quantity per unit (e.g., 100 for 100g)
   - **Product Price**: Enter the displayed price in ₹ (Rupees)
   - **Required Quantity**: Enter how many units you need

3. **View Calculations**
   - **Cost per 1 Unit**: Price for a single unit
   - **Cost per 100 Units**: Bulk pricing calculation
   - **Cost for Required Quantity**: Total cost for your needed amount

4. **Compare & Decide**
   - Compare unit prices across products
   - Identify the best value for your needs
   - Click product URLs to visit the online store

### Advanced Features

#### Custom Units
1. Select "Custom Unit" from the unit dropdown
2. Enter your custom unit name (e.g., "dozen", "pack", "bundle")
3. All calculations automatically update with your custom unit

#### Product URL Image Fetching
- Paste a product URL to automatically fetch the product image
- Images load with a 500ms debounce to optimize performance
- If no image is found, the field remains empty

#### Removing Products
- Click the "🗑️ Remove Product" button on any product card
- Product is instantly removed from the comparison

### Example Use Cases

#### Grocery Shopping
Compare the per-gram or per-liter cost of different brands:
```
Product A: 500g for ₹150 = ₹0.30 per gram
Product B: 1kg for ₹250 = ₹0.25 per gram
Best Value: Product B saves ₹0.05 per gram!
```

#### Bulk Purchasing
Calculate wholesale savings:
```
Retail: 1 unit for ₹10 = ₹1000 per 100 units
Wholesale: 10 units for ₹90 = ₹900 per 100 units
Savings: ₹100 (10%) when buying in bulk
```

## 🛠️ Technology Stack

### Frontend Technologies

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Custom styling with flexbox and grid layouts
- **Vanilla JavaScript (ES6+)**: Modular, maintainable code
  - ES6 Modules
  - Async/Await
  - DOM Manipulation
  - Event Delegation

### Architecture

- **Modular Design**: Separated concerns with dedicated modules
  - `calc.js`: Core calculation logic
  - `fetchImage.js`: Image fetching functionality
  - `utils.js`: Utility functions
  - `app.js`: Main application orchestration

### Development Practices

- ✅ Clean Code principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ Event-driven architecture
- ✅ Responsive design
- ✅ Progressive enhancement
- ✅ Accessibility considerations

## 📁 Project Structure

```
product-price-calculator-pro/
├── index.html              # Main HTML file
├── styles.css              # Application styles
├── app.js                  # Main application logic
├── core/                   # Core functionality modules
│   ├── calc.js            # Price calculation engine
│   ├── fetchImage.js      # Image fetching utilities
│   └── utils.js           # Helper functions
├── screenshots/           # Application screenshots
│   └── README.md         # Screenshot guidelines
├── LICENSE               # GPL v3 License
└── README.md            # This file
```

## 🌍 Browser Support

Product Price Calculator Pro supports all modern browsers:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest ✓ | ✅ Fully Supported |
| Firefox | Latest ✓ | ✅ Fully Supported |
| Safari | Latest ✓ | ✅ Fully Supported |
| Edge | Latest ✓ | ✅ Fully Supported |
| Opera | Latest ✓ | ✅ Fully Supported |

**Minimum Requirements:**
- ES6 Module support
- CSS Grid and Flexbox
- Fetch API
- LocalStorage (optional)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**: Open an issue describing the bug
2. **Suggest Features**: Share your ideas for improvements
3. **Submit Pull Requests**: Fix bugs or add new features
4. **Improve Documentation**: Help make the docs better
5. **Share**: Tell others about this project

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Use ES6+ features
- Follow existing code formatting
- Add comments for complex logic
- Test on multiple browsers
- Keep functions small and focused

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

### What This Means

- ✅ **Freedom to Use**: Use for personal or commercial projects
- ✅ **Freedom to Modify**: Change and customize the code
- ✅ **Freedom to Share**: Distribute copies to others
- ✅ **Copyleft**: Derivative works must also be GPL-licensed

## 💬 Support

Need help? Have questions? We're here to assist!

### Get Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/product-price-calculator-pro/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/product-price-calculator-pro/discussions)
- **Email**: your.email@example.com

### FAQ

**Q: Can I use this for commercial purposes?**
A: Yes! The GPL v3 license allows commercial use.

**Q: Does this work offline?**
A: Yes, except for image fetching which requires internet.

**Q: Can I change the currency?**
A: Yes, you can modify the code to use any currency symbol.

**Q: Is my data stored anywhere?**
A: No, all calculations happen in your browser. No data is sent to servers.

**Q: Can I add more measurement units?**
A: Absolutely! Either use the custom unit feature or modify the code.

## 🌟 Acknowledgments

- Inspired by the need for better price comparison tools
- Built with ❤️ for smart shoppers everywhere
- Thanks to all contributors and users

## 🔗 Related Projects

- [Unit Converter Pro](#)
- [Shopping List Manager](#)
- [Budget Tracker App](#)

## 📊 SEO Keywords

Price calculator, product comparison tool, unit price calculator, cost per unit, bulk pricing calculator, grocery price comparison, e-commerce price tool, shopping calculator, price comparison app, unit converter, cost calculator, best price finder, smart shopping tool, bulk discount calculator, wholesale pricing tool

---

<p align="center">
  <strong>Made with ❤️ for Smart Shoppers</strong><br>
  ⭐ Star this repo if you find it helpful!<br>
  🔄 Fork it to create your own version!<br>
  🤝 Contribute to make it even better!
</p>

<p align="center">
  <a href="#-overview">Back to Top ⬆️</a>
</p>
