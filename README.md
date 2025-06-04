# React + Vite useContext() Practice App

A simple and responsive React app built using **Vite** and styled with **Tailwind CSS**. This project is designed to help understand and implement the **`useContext()`** hook in React for managing global state without prop drilling.

## What It Does

- Wraps the application with a custom `UserContextProvider` to manage global state.
- The `Login` component uses `useContext()` to update the global `user` state via `setUser()`.
- The `Profile` component reads the global `user` data using `useContext()` and conditionally renders content based on login status.
- Clean, reusable structure for practicing real-world use of React Context.

