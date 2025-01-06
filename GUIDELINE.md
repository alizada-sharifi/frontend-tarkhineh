# Project Folder Structure Guide

This document provides an overview of the `src` folder structure and guidelines for contributors.

## Folder Structure

### 1. `assets`

- **Purpose**: Contains static files such as images, icons, fonts, and other media files.
- **Best Practices**:
  - Organize subfolders by type (e.g., `images/`, `icons/`, `fonts/`).
  - Use consistent naming conventions (e.g., `kebab-case`).
  - Ensure assets are optimized for faster load times.

---

### 2. `components`

- **Purpose**: Houses reusable UI components not tied to a specific page.
- **Best Practices**:
  - Structure subfolders by component type (e.g., `buttons/`, `modals/`, `cards/`).
  - Each component should have its own folder:
    - `ComponentName.jsx`
    - `index.js` (optional, for simpler imports)

---

### 3. `config`

- **Purpose**: Stores configuration files like API endpoints or application-level constants.
- **Best Practices**:
  - Use clear and descriptive file names (e.g., `apiConfig.js`, `appSettings.js`).
  - Avoid including sensitive information; use `.env` files for environment-specific data.

---

### 4. `helpers`

- **Purpose**: Contains utility functions or common logic reusable across the application.
- **Best Practices**:
  - Group related functions into files (e.g., `dateHelpers.js`, `stringHelpers.js`).
  - Avoid adding page-specific logic.
  - Example:
    ```javascript
    export const formatDate = (date) => new Date(date).toLocaleDateString();
    ```

---

### 5. `hooks`

- **Purpose**: Custom React hooks encapsulating reusable stateful logic.
- **Best Practices**:
  - Name hooks clearly (e.g., `useFetchData.js`, `useAuth.js`).
  - Ensure hooks follow React's rules (e.g., always start with "use").
  - Include comments explaining the purpose and usage of each hook.

---

### 6. `layouts`

- **Purpose**: Defines application-wide layouts (e.g., `MainLayout`, `AuthLayout`).
- **Best Practices**:
  - Store layout components in folders (e.g., `MainLayout/`, `AuthLayout/`).
  - Include shared structures like headers, footers, and sidebars.
  - Example:
    ```javascript
    const MainLayout = ({children}) => (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
    ```

---

### 7. `pages`

- **Purpose**: Contains components representing individual routes.
- **Best Practices**:
  - Name folders/files based on the route (e.g., `HomePage`, `LoginPage`, `DashboardPage`).
  - Keep route-specific logic here and use reusable components from `components`.
  - Example structure:
    ```
    pages/
    ├── HomePage/
    │   ├── HomePage.jsx
    │   ├── index.js
    ```

---

### 8. `providers`

- **Purpose**: Contains context providers or higher-order components (HOCs) for managing global state.
- **Best Practices**:
  - Name providers clearly (e.g., `AuthProvider`, `ThemeProvider`).
  - Write each provider in its own file with encapsulated logic.
  - Example:
    ```javascript
    export const AuthContext = createContext();
    export const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      return (
        <AuthContext.Provider value={{user, setUser}}>
          {children}
        </AuthContext.Provider>
      );
    };
    ```

---

### 9. `services`

- **Purpose**: Handles API calls and external data-fetching logic.
- **Best Practices**:
  - Group services by domain (e.g., `authService.js`, `userService.js`).
  - Use libraries like Axios or Fetch for HTTP requests.
  - Example:
    ```javascript
    import axios from 'axios';
    export const fetchUser = async (id) => {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    };
    ```

---

### 10. `styles`

- **Purpose**: Contains global styles, themes, or variables.
- **Best Practices**:
  - Use CSS-in-JS libraries, modular CSS, or SCSS for better organization.
  - Store reusable variables in files like `variables.scss` or `theme.js`.
  - Example:
    ```css
    /* global.css */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    ```

---

## Other

- **Code Consistency**: Follow coding standards enforced by ESLint and Prettier.
- **Reusability**: Avoid duplication; reuse components, hooks, or utilities whenever possible.

## Issue

If some folder for best practices is missing please let us know with [open a issue](https://github.com/DevExtend/frontend-tarkhineh/issues).
