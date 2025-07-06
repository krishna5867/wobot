# 📸 Camera Management Dashboard

A responsive and dynamic camera management dashboard built using **React**, **Vite**, and custom reusable components — including search, filter, pagination, and status update features.

---

## 🚀 Features

- 🔍 Debounced search bar
- 📍 Filter by location and status using custom dropdowns
- 📄 Paginated camera list with adjustable limit
- 🟢 Toggle camera status (Active/Inactive)
- 💡 Health indicators with dynamic SVG rings (A–F)
- ♻️ Fully reusable UI components
- 🔒 API integration with token-based authentication

---

## 🛠 Tech Stack

- ⚛️ **React**
- ⚡ **Vite**
- 🎨 **Inline styles** (no external CSS libraries)
- 📦 **Custom Hooks** (`useFetch`, `useDebounce`, etc.)
- 🍞 **react-toastify** for notifications

---

```
## 📁 Project Structure

src/
├── assets/ # Static assets like SVGs and images
│
├── components/
│ ├── common/ # Reusable UI components
│ │ ├── Pagination.jsx # Pagination controls with dropdown and arrows
│ │ ├── Table.jsx # Table structure wrapper (optional separation)
│ │ ├── TableHeader.jsx # Table headers
│ │ └── TableList.jsx # Main component displaying camera data
│
├── hooks/ # Custom reusable hooks
│ ├── useClickOutside.js # Detect outside clicks (for dropdowns etc.)
│ ├── useDebounce.js # Debounce input values (e.g., for search)
│ └── useFetch.js # Abstracted fetch logic with loading and error state
│
├── utils/ # Utility functions and static data
│ ├── healthColor.js # getHealthColor function based on grades (A–F)
│ ├── index.js # Entry point for exporting all utils (optional)
│ ├── locationData.js # Static or derived location options
│ └── statuaData.js # Status options like Active, Inactive
│
├── App.jsx # Root component
├── App.css # Global styles
├── index.js # React app entry point
├── index.css # Base styles
└── main.jsx # Main rendering logic (usually used with Vite)
└── vite.config.js # Vite configuration
└── package.json # Project metadata and dependencies
└── README.md # This file
```

## Follow these steps to run the project locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/krishna5867/wobot.git
cd wobot
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3.** Set Up Environment Variables**

```
VITE_API_TOKEN= your_token_here
```

### 4. **Run the Development Server**

```bash
npm run dev
```
