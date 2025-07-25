# 🛍️ Products CRUD Management System

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</div>

<br />

<div align="center">
  <h3>🚀 A Modern, Feature-Rich Product Management Application</h3>
  <p>Built with React, TypeScript, and Tailwind CSS for an exceptional user experience</p>
</div>

## ✨ Features

### 🎯 Core Functionality
- **CRUD Operations**: Complete Create, Read, Update, and Delete functionality
- **Real-time Updates**: Instant UI updates without page refresh
- **Form Validation**: Robust validation with helpful error messages
- **Responsive Design**: Beautiful on all devices (mobile, tablet, desktop)

### 🎨 Advanced Features
- **Dynamic Color Selection**: Choose multiple colors for each product
- **Category Management**: Organize products with visual category representation
- **Image Preview**: Hover effects and smooth transitions on product images
- **Smart Price Formatting**: Automatic thousand separators (e.g., $1,234.56)
- **Text Truncation**: Clean UI with automatic text ellipsis for long descriptions
- **Modal Interfaces**: Elegant dialog boxes for all CRUD operations
- **UUID Integration**: Unique identifiers for reliable data management

### 💡 User Experience
- **Intuitive Interface**: Clean, modern design following best UX practices
- **Smooth Animations**: Polished transitions and hover effects
- **Accessibility**: Built with Headless UI for WCAG compliance
- **Confirmation Dialogs**: Safe delete operations with user confirmation
- **Visual Feedback**: Clear success/error states for all actions

## 🛠️ Tech Stack

### Frontend Framework
- **React 18**: Latest features including concurrent rendering
- **TypeScript**: Type-safe development with IntelliSense support
- **Vite**: Lightning-fast HMR and optimized builds

### Styling & UI
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **Headless UI**: Unstyled, accessible UI components
- **Custom Components**: Reusable, modular component architecture

### Code Quality
- **ESLint**: Enforced code quality standards
- **TypeScript Interfaces**: Strong typing throughout the application
- **Modular Architecture**: Clean separation of concerns
- **Utility Functions**: DRY principle implementation

## 📸 Screenshots

<div align="center">
  <img src="./screenshots/main-view.png" alt="Main Product View" width="600" />
  <p><i>Main Product Grid View</i></p>
</div>

<div align="center">
  <img src="./screenshots/add-product.png" alt="Add Product Modal" width="400" />
  <p><i>Add New Product Modal</i></p>
</div>

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kareem-shalan/Products-CRUDS.git
   cd Products-CRUDS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
Products-CRUDS/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button/
│   │   ├── Dialog/
│   │   ├── ProductCard/
│   │   └── ...
│   ├── data/             # Mock data and constants
│   ├── interfaces/       # TypeScript interfaces
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── validation/       # Form validation logic
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── package.json          # Project dependencies
```

## 🔥 Key Components

### ProductCard
Displays individual products with:
- Product image with hover effects
- Title and description
- Price with formatting
- Color indicators
- Edit/Delete actions

### Dialog (Modal)
Reusable modal component for:
- Adding new products
- Editing existing products
- Delete confirmations

### Form Validation
- Required field validation
- URL format validation
- Price number validation
- Real-time error feedback

## 🎯 Usage

### Adding a Product
1. Click "Open Modal" button
2. Fill in product details
3. Select colors and category
4. Click "Submit"

### Editing a Product
1. Click "Edit" on any product card
2. Modify desired fields
3. Click "Update"

### Deleting a Product
1. Click "Delete" on any product card
2. Confirm deletion in the modal
3. Product is removed from the list

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first approach
- Headless UI for accessible components
- The open-source community

## 📞 Contact

Kareem Shalan - [@kareem-shalan](https://github.com/kareem-shalan)

Project Link: [https://github.com/kareem-shalan/Products-CRUDS](https://github.com/kareem-shalan/Products-CRUDS)

---

<div align="center">
  <p>Made with ❤️ by Kareem Shalan</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div> 
