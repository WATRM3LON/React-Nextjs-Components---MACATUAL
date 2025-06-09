# React Practice Activity

This is a simple React-based learning activity that demonstrates the use of React components, props, and state. It includes:

- A loading animation component.
- A welcome card that displays a dynamic name and age (counter).
- A student information form with input handling.
- An interactive counter that remembers its state across views.

---

## 🔧 Features

- **Component-Based Architecture**  
  Organized using small, reusable components (`Loading`, `WelcomeCard`, `StudentInfo`, `Counter`, `FCard`).

- **State Management with `useState`**  
  React's `useState` hook is used for managing view changes, form inputs, and the counter.

- **Prop Passing**  
  Values like name and counter are passed as props between components to maintain consistency.

- **Persistent Counter Across Tabs**  
  The counter value remains even after switching views (e.g., from counter to welcome and back).

---

## 📂 Components Overview

### `App`
- Root component that renders the loading animation and the main feature card.

### `FCard`
- Holds the active view (welcome, info, counter) and manages shared state for name and counter.

### `WelcomeCard`
- Displays a welcome message with the student's name and current age (counter).

### `StudentInfo`
- A form that collects a student’s name and email, with local input state.
- On submission, updates the shared name and shows an alert.

### `Counter`
- Simple counter that lets users increment or decrement a number.
- Used here to represent "age".

### `Loading`
- A simple animated circle shown at the top of the page.


