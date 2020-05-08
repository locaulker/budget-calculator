import React, { useState } from "react"
import "./App.css"
import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"
import Alert from "./components/Alert"
import { v4 as uuidv4 } from "uuid"

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 },
]

const App = () => {
  // *********** State values ************
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState("")
  const [amount, setAmount] = useState("")

  // *********** Functionalities ************
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount }
      setExpenses([...expenses, singleExpense])
      setCharge("")
      setAmount("")
    } else {
      // call handleAlert
    }
  }

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending:{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount))
          }, 0)}
        </span>
      </h1>
    </>
  )
}

export default App
