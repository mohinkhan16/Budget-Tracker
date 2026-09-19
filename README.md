
# 💰 Budget Tracker

A simple and interactive **Budget Tracker Web Application** built using **HTML, CSS, Bootstrap, and JavaScript**. It allows users to add income and expense transactions and automatically calculates total income, total expenses, and the current balance.

## 🚀 Features

* ➕ Add income and expense transactions
* ✏️ Edit the latest transaction
* 🗑️ Delete the latest transaction
* 📊 Automatically calculate:

  * Total Income
  * Total Expenses
  * Current Balance
* 📅 Select transaction date
* 📝 Add transaction description
* 💵 Enter transaction amount
* 🔄 Select transaction type — Income or Expense
* 📱 Responsive and simple user interface

## 🛠️ Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling and layout
* **Bootstrap 5** — Responsive UI
* **JavaScript** — Application logic and DOM manipulation

## 📂 Project Structure

```text
Budget-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

### 1. Add Transaction

The user enters:

* Date
* Description
* Amount
* Transaction Type

After clicking **Add**, the transaction is stored in the JavaScript `transactions` array.

### 2. Calculate Summary

The application loops through all transactions and calculates:

```javascript
Total Income
Total Expenses
Balance = Income - Expenses
```

The values are automatically updated using the `updateSummary()` function.

### 3. Edit Transaction

Clicking the **Edit** button loads the latest transaction into the form.

The **Add** button changes to **Update**, allowing the user to modify the transaction.

### 4. Delete Transaction

The **Delete** button removes the latest transaction from the array and updates the summary.

## 🧠 JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

* Variables using `let`
* Arrays
* Objects
* Functions
* `addEventListener()`
* DOM Manipulation
* `getElementById()`
* Form Handling
* `preventDefault()`
* `forEach()`
* Conditional Statements
* `Number()`
* `toFixed()`
* Array `push()`
* Array `pop()`
* Object properties
* Event Handling

## 📌 Main JavaScript Logic

Transactions are stored as objects:

```javascript
{
  date: "2026-09-19",
  description: "Salary",
  amount: 25000,
  type: "income"
}
```

The application calculates the balance using:

```javascript
balance = income - expense;
```

## ▶️ How to Run

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Make sure the following files are present:

```text
index.html
style.css
script.js
```

4. Open `index.html` in your browser.

You can also use **Live Server** in VS Code.

## 🎯 Project Purpose

The main purpose of this project is to practice **JavaScript DOM manipulation, event handling, arrays, objects, functions, and basic CRUD operations** while building a practical real-world application.

## 🔮 Future Improvements

The project can be extended with:

* Transaction history table
* Edit any transaction
* Delete any transaction
* Search transactions
* Filter by inc
