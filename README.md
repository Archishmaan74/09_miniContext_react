# React + Vite useContext() Practice App

A simple and responsive React app built using **Vite** and styled with **Tailwind CSS**. This project is designed to help understand and implement the **`useContext()`** hook in React for managing global state without prop drilling.

### Hosted URL:
https://09-mini-context-react.vercel.app/ 

### What It Does

- Wraps the application with a custom `UserContextProvider` to manage global state.
- The `Login` component uses `useContext()` to update the global `user` state via `setUser()`.
- The `Profile` component reads the global `user` data using `useContext()` and conditionally renders content based on login status.
- Clean, reusable structure for practicing real-world use of React Context.

### Screenshots:

<img width="959" alt="login_1" src="https://github.com/user-attachments/assets/310c6809-75fa-4558-9aa4-38e0b93e4b2c" />

<img width="956" alt="login_2" src="https://github.com/user-attachments/assets/a7378e7a-6e4c-4f80-ab60-290ccf8f358b" />

<img width="959" alt="logged_in" src="https://github.com/user-attachments/assets/84aa493f-3ca0-4ea9-95f0-8ce2d9984592" />
