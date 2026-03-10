import { useEffect, useState } from "react";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} from "../api/ExpensesApi";

import { Table, Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ExpensesList() {

  const [expenses, setExpenses] = useState([]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  // user đang login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // load expenses
  const loadExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  // add / update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || amount <= 0) {
      alert("Invalid input");
      return;
    }

    const data = { name, amount, category, date };

    if (editingId) {
      await updateExpense(editingId, data);
      setEditingId(null);
    } else {
      await addExpense(data);
    }

    resetForm();
    loadExpenses();
  };

  const resetForm = () => {
    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const handleEdit = (exp) => {
    setName(exp.name);
    setAmount(exp.amount);
    setCategory(exp.category);
    setDate(exp.date);
    setEditingId(exp.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this expense?")) {
      await deleteExpense(id);
      loadExpenses();
    }
  };

  // filter
  const filteredExpenses = filter
    ? expenses.filter((e) => e.category === filter)
    : expenses;

  // total
  const total = filteredExpenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  return (

    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h3>Total of Expenses: {total.toLocaleString()} ₫</h3>

        <div className="d-flex align-items-center">

          <img
            src={user?.avatar}
            alt="avatar"
            width="35"
            height="35"
            className="rounded-circle me-2"
          />

          <span className="fw-bold me-3">
            {user?.username}
          </span>

          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>

        </div>

      </div>

      <div className="row">

        {/* FORM */}
        <div className="col-md-4">

          <Card className="p-3">

            <h5>{editingId ? "Edit Expense" : "Add Expense"}</h5>

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <Button type="submit">
                {editingId ? "Save" : "Add Expense"}
              </Button>

              <Button
                className="ms-2"
                variant="secondary"
                onClick={resetForm}
              >
                Reset
              </Button>

            </Form>

          </Card>

        </div>

        {/* TABLE */}
        <div className="col-md-8">

          <Card className="p-3">

            <h5>Expense Management</h5>

            <Form.Select
              className="mb-3"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All categories</option>
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </Form.Select>

            <Table striped bordered>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredExpenses.map((exp) => (

                  <tr key={exp.id}>

                    <td>{exp.name}</td>

                    <td>
                      {Number(exp.amount).toLocaleString()} ₫
                    </td>

                    <td>{exp.category}</td>

                    <td>{exp.date}</td>

                    <td>

                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => handleEdit(exp)}
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        className="ms-2"
                        onClick={() => handleDelete(exp.id)}
                      >
                        Delete
                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </Table>

          </Card>

        </div>

      </div>

    </div>

  );
}

export default ExpensesList;