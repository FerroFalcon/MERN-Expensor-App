import { useState, useEffect } from "react";
import AppBar from "./components/AppBar.js";
import TransactionForm from "./components/TransactionForm.js";

function App() {
  const InitialForm = {
    amount: "",
    description: "",
    date: "",
  };
  const [form, setForm] = useState(InitialForm);

  const [transactions, setTransactions] = useState([]);

  useEffect(
    () => {
      fetchTransactions();
    },
    [
      /* transactions*/
    ]
  );

  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      setForm(InitialForm);
      fetchTransactions();
    }
  }

  return (
    <div>
      <AppBar />
      <TransactionForm />

      <br />

      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
