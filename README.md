# 🍽️ Born Studio Digital Menu

A modern digital menu built with **React**, **TypeScript**, and **Vite**, designed to provide a simple and intuitive ordering experience for customers while giving administrators full control over products and orders.

The application is optimized for tablets and touch devices, making it ideal for restaurants, cafés, bars, and beauty studios that offer beverages or snacks.

---

# 📌 Project Overview

This project was developed to replace traditional paper menus with a fully digital solution.

Customers can:

- Browse products by category
- Add items to the shopping cart
- Adjust quantities
- Review their order
- Pay instantly using Pix QR Code

Administrators can:

- Access a protected management area
- Register new products
- Edit existing products
- Remove unavailable products
- Manage the entire menu without changing the source code

---

# 🚀 Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- React Context API
- GitHub Pages
- GitHub Actions
- Supabase (Database)

---

# ✨ Features

## Customer Area

- Responsive digital menu
- Product categories
- Shopping cart
- Quantity selector
- Order summary
- Pix QR Code payment
- Automatic order confirmation

---

## Admin Area

The administration panel is protected by a **6-digit PIN**, inspired by the iPhone lock screen.

Administrators can:

- Add new products
- Edit product information
- Delete products
- Enable or disable products
- Upload product images
- Manage product categories

The admin panel can be accessed through the settings icon.

---

# 🏗️ Architecture

```text
React Application
│
├── Customer Menu
│
├── Shopping Cart
│
├── Checkout
│
├── Pix Payment
│
├── Admin Panel
│      │
│      ├── PIN Authentication
│      ├── Product Management
│      └── Category Management
│
└── Supabase
       │
       ├── Products
       └── Orders
```

---

# 📦 Project Structure

```text
src/
│
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
├── types/
└── utils/
```

---

# 💳 Payment Flow

1. The customer selects one or more products.
2. Products are added to the shopping cart.
3. The application calculates the total amount.
4. A Pix QR Code is generated for payment.
5. Once the payment is completed, the order is finalized and stored in the database.

---

# 🔒 Security

The administration area is protected by a **6-digit PIN**.

Only authorized users can:

- Create products
- Update products
- Delete products
- Manage the digital menu

Customers only have access to the ordering interface.

---

# 🔄 Continuous Integration & Continuous Deployment (CI/CD)

This project uses a complete **CI/CD pipeline** powered by **GitHub Actions**.

Whenever a new commit is pushed to the **main** branch, the pipeline automatically performs the following steps:

1. Checks out the latest version of the source code.
2. Sets up the Node.js environment.
3. Installs all project dependencies.
4. Builds the React application.
5. Deploys the production build to **GitHub Pages**.

This automated workflow ensures that every approved change is published immediately, eliminating the need for manual deployments and reducing deployment errors.

### CI/CD Benefits

- Fully automated build process
- Automatic deployment to production
- Faster delivery of new features
- Consistent deployment workflow
- Reduced human error
- Easy maintenance and continuous delivery

---

# ☁️ Deployment

The application is hosted on **GitHub Pages**.

Deployment is handled automatically through the GitHub Actions CI/CD pipeline, ensuring that the production environment is always synchronized with the latest version of the repository.

No manual deployment is required.

---

# 📱 Responsive Design

The interface was designed primarily for tablets but also provides a great experience on:

- Desktop
- Mobile devices
- Touchscreen kiosks

---

# 🎯 Project Goals

- Improve the customer experience
- Reduce operational costs
- Simplify menu management
- Eliminate printed menus
- Speed up the ordering process
- Provide an intuitive interface for both customers and administrators

---

# 📈 Future Improvements

Planned features include:

- Product search
- Advanced filters
- Multiple payment methods
- Order history
- Sales dashboard
- Product availability scheduling
- Discount coupons
- Multi-language support
- Dark mode
- Kitchen order display
- Real-time order tracking
- Sales analytics

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

Navigate to the project folder:

```bash
cd your-repository
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🤝 Contributing

Contributions are welcome.

If you have suggestions for improvements or find any issues, feel free to open an issue or submit a pull request.

---

# 📄 License

This project is available for educational and commercial purposes.

---

## 👨‍💻 Author

Developed by **Paulo Pimentel** using **React**, **TypeScript**, **Vite**, **Supabase**, and **GitHub Actions**.

Made with ❤️ and a passion for building modern web applications.