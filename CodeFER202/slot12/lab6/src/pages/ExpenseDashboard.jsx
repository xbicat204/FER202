import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "../redux/expenseSlice";

import DashboardNavbar from "../components/DashboardNavbar";
import TotalExpenses from "../components/TotalExpenses";
import CategoryFilter from "../components/CategoryFilter";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

import "../styles/dashboard.css";

function ExpenseDashboard() {

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  const [editingId, setEditingId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");



  /* load data */

  const fetchExpenses = useCallback(async () => {

    const res = await axios.get("http://localhost:3001/expenses");

    dispatch(setExpenses(res.data));

  }, [dispatch]);
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);


  /* filter */

  const filteredExpenses =
    categoryFilter === "All"
      ? expenses
      : expenses.filter((e) => e.category === categoryFilter);



  /* save */

  const handleSave = async (e) => {

    e.preventDefault();

    const data = {
      name,
      amount: Number(amount),
      category,
      date
    };

    if (editingId) {

      await axios.put(
        `http://localhost:3001/expenses/${editingId}`,
        data
      );

    } else {

      await axios.post(
        "http://localhost:3001/expenses",
        data
      );

    }

    fetchExpenses();
    handleReset();
  };



  const handleReset = () => {

    setName("");
    setAmount("");
    setCategory("Food");
    setDate("");
    setEditingId(null);
  };



  const handleEdit = (expense) => {

    setEditingId(expense.id);

    setName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
  };



  const handleDelete = async (id) => {

    if (window.confirm("Delete this expense?")) {

      await axios.delete(
        `http://localhost:3001/expenses/${id}`
      );

      fetchExpenses();
    }
  };



  return (
    <div className="dashboard-container">

      <DashboardNavbar />

      <Container className="mt-4">

        {/* TOTAL + FILTER */}
        <Row className="mb-4">

          <Col md={6}>
            <TotalExpenses expenses={filteredExpenses} />
          </Col>

          <Col md={6}>
            <CategoryFilter
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
          </Col>

        </Row>



        {/* FORM + TABLE */}
        <Row>

          <Col md={4}>

            <ExpenseForm
              name={name}
              setName={setName}
              amount={amount}
              setAmount={setAmount}
              category={category}
              setCategory={setCategory}
              date={date}
              setDate={setDate}
              handleSave={handleSave}
              handleReset={handleReset}
            />

          </Col>

          <Col md={8}>

            <ExpenseTable
              expenses={filteredExpenses}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />

          </Col>

        </Row>

      </Container>



      {/* FOOTER */}

      <footer className="footer">

        <Container className="d-flex justify-content-between">

          <span>© 2025 Personal Budget</span>

          <span>
            Built with React, Redux Toolkit & Json Server
          </span>

        </Container>

      </footer>

    </div>
  );
}

export default ExpenseDashboard;