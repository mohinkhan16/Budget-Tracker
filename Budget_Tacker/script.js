let form = document.getElementById("transactionForm");

let date = document.getElementById("date");
let description = document.getElementById("description");
let amount = document.getElementById("amount");
let type = document.getElementById("type");

let totalIncome = document.getElementById("totalIncome");
let totalExpense = document.getElementById("totalExpense");
let balance = document.getElementById("balance");

let transactions = [];
let editIndex = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const transaction = {
    date: date.value,
    description: description.value,
    amount: Number(amount.value),
    type: type.value
  };

  if (editIndex === null) {
    transactions.push(transaction);
  } else {
    transactions[editIndex] = transaction;
    editIndex = null;
    document.getElementById("submitBtn").innerText = "Add";
  }

  updateSummary();
  form.reset();
});


function updateSummary() {
  let income = 0;
  let expense = 0;

  transactions.forEach((item) => {
    if (item.type === "income") {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });

  totalIncome.innerText = income.toFixed(2);
  totalExpense.innerText = expense.toFixed(2);
  balance.innerText = (income - expense).toFixed(2);
}

document.getElementById("delete").addEventListener("click", function () {
  if (transactions.length === 0) {
    alert("No transaction to delete");
    return;
  }

  transactions.pop();
  updateSummary();
});


document.getElementById("Edit").addEventListener("click", function () {
  if (transactions.length === 0) {
    alert("No transaction to edit");
    return;
  }

  editIndex = transactions.length - 1;

  const item = transactions[editIndex];

  date.value = item.date;
  description.value = item.description;
  amount.value = item.amount;
  type.value = item.type;

  document.getElementById("submitBtn").innerText = "Update";
});